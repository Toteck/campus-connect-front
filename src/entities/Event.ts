export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  event_type: string;
  public_type: string;
  curso_id: string | null;
  turma_id: string | null;
  user_id: number;
  created_at: string;
  updated_at: string;
}
