export interface User{
 fullname: string;
  email: string;
  password?: string;
  passport?: File | null;
}
export interface Book {
  id?: number;
  title: string;
  author: Author;
  description: string;
  coverImageUrl: string | File ;
  rating: string
  reviews:Reviews[]
}

export interface Author {
  id?: number;
  fullname: string;
  biography: string;
  passport: string | File ;
  books?: Book[];
}

export interface Reviews {
  id?: number;
  comment: string;
   user: User;
  rating: string;
}
export interface UserProfile {
  name: string;
  email: string;
}

export interface BookState {
  books: Book[];
  bookDetails: Book | null;
}

export interface AuthorState {
  authors: Author[];
  authorDetails: Author | null;
}

export interface UserState {
  profile: UserProfile | null;
  isAuthenticated: boolean;
}

export interface ErrorState {
  error: string | null;
}



