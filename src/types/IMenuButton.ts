import {Dispatch, HTMLAttributes, SetStateAction} from "react";

export interface IMenuButton extends HTMLAttributes<HTMLButtonElement>{
	isShow: boolean;
	setIsShow:  Dispatch<SetStateAction<boolean>>;
}