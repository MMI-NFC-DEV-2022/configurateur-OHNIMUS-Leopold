export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Agent: {
        Row: {
          age: number | null
          id: number
          idUser: string | null
          nomAgent: string | null
          prenomAgent: string | null
        }
        Insert: {
          age?: number | null
          id?: number
          idUser?: string | null
          nomAgent?: string | null
          prenomAgent?: string | null
        }
        Update: {
          age?: number | null
          id?: number
          idUser?: string | null
          nomAgent?: string | null
          prenomAgent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Agent_id_user_fkey"
            columns: ["idUser"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Commune: {
        Row: {
          id: number
          nomCommune: string | null
        }
        Insert: {
          id?: number
          nomCommune?: string | null
        }
        Update: {
          id?: number
          nomCommune?: string | null
        }
        Relationships: []
      }
      Maison: {
        Row: {
          adresse: string | null
          favori: boolean | null
          id: number
          idAgent: number | null
          idQuartier: number | null
          image: string | null
          nbrChambres: number | null
          nbrSDB: number | null
          nomMaison: string | null
          prix: number | null
          surface: number | null
        }
        Insert: {
          adresse?: string | null
          favori?: boolean | null
          id?: number
          idAgent?: number | null
          idQuartier?: number | null
          image?: string | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison?: string | null
          prix?: number | null
          surface?: number | null
        }
        Update: {
          adresse?: string | null
          favori?: boolean | null
          id?: number
          idAgent?: number | null
          idQuartier?: number | null
          image?: string | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison?: string | null
          prix?: number | null
          surface?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Maison_idAgent_fkey"
            columns: ["idAgent"]
            isOneToOne: false
            referencedRelation: "Agent"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Maison_idQuartier_fkey"
            columns: ["idQuartier"]
            isOneToOne: false
            referencedRelation: "Quartier"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Maison_idQuartier_fkey"
            columns: ["idQuartier"]
            isOneToOne: false
            referencedRelation: "quartiercommune"
            referencedColumns: ["idQuartier"]
          }
        ]
      }
      Quartier: {
        Row: {
          id: number
          idCommune: number | null
          nomQuartier: string | null
        }
        Insert: {
          id?: number
          idCommune?: number | null
          nomQuartier?: string | null
        }
        Update: {
          id?: number
          idCommune?: number | null
          nomQuartier?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Quartier_idCommune_fkey"
            columns: ["idCommune"]
            isOneToOne: false
            referencedRelation: "Commune"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Quartier_idCommune_fkey"
            columns: ["idCommune"]
            isOneToOne: false
            referencedRelation: "quartiercommune"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      quartiercommune: {
        Row: {
          id: number | null
          idQuartier: number | null
          nomCommune: string | null
          nomQuartier: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
