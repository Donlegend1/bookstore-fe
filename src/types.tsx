export interface User{
fullname: string,
  email: string,
  created_at: string,
  updated_at:string

}
export interface Book {
  id?: number;
  title: string;
  author: string;
  description: string;
  coverImageUrl: string | File ;
  rating:string
}

export interface Author {
  id?: number;
  fullname: string;
  biography: string;
  passport: string | File ;
  books?: Book[];
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



