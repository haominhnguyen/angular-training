/**
 * User info when login
 */
export interface UserResponse {
  id : string;
  username : string;
  password : string;
  avatar : string;
  role : string;
  isActivated : string;
  defaultPage : string;
}
