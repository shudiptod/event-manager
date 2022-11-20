export type CreateEventParams = {
  title: string;
  start_at: Date;
  end_at: Date;
};

export type UpdateEventParams = {
  title: string;
  start_at: Date;
  end_at: Date;
};

export type CreateWorkshopParams = {
  title: string;
  description: string;
  start_at: Date;
  end_at: Date;
  event_id: number;
};
export type UpdateWorkshopParams = {
  title: string;
  description: string;
  start_at: Date;
  end_at: Date;
};

export type CreateReservationParams = {
  name: string;
  email: string;
};
export type UpdateReservationParams = {
  name: string;
  email: string;
};

export type ActiveEventWithPaginationParams = {
  per_page: number;
  current_page: number
}
