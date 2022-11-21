import { createContext } from "react";
import { AuthorEntity } from "./AuthorEntity";
import { PortraitEntity } from "./PortraitEntity";

const author = AuthorEntity.create({ name: "Cool user", portrait: PortraitEntity.create({ src: "https://avatars.githubusercontent.com/u/1640588?v=4" }) })
export const UserContext = createContext(author);

