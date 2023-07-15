import { Listing, Reservation } from '@prisma/client';

export type ReservationWithListing = Omit<Reservation, 'listing'> & {
  listing: Listing;
};
