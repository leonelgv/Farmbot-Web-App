import { BotState } from "../devices/interfaces";
import { TaggedUser, TaggedLog } from "farmbot";
import { GetWebAppConfigValue } from "../config_storage/actions";

export interface NavButtonProps {
  user: TaggedUser | undefined;
  dispatch: Function;
  bot: BotState;
  consistent: boolean;
  onClick?: () => void;
}

export interface NavBarProps {
  consistent: boolean;
  logs: TaggedLog[];
  bot: BotState;
  user: TaggedUser | undefined;
  dispatch: Function;
  timeOffset: number;
  getConfigValue: GetWebAppConfigValue;
}

export interface NavBarState {
  mobileMenuOpen: boolean;
  tickerListOpen: boolean;
  accountMenuOpen: boolean;
}

type ToggleEventHandler = (e: React.MouseEvent<HTMLDivElement>) => void;

export interface MobileMenuProps {
  close: (property: keyof NavBarState) => ToggleEventHandler;
  mobileMenuOpen: boolean;
}

export interface TickerListProps {
  toggle: (property: keyof NavBarState) => ToggleEventHandler;
  logs: TaggedLog[]
  tickerListOpen: boolean;
  timeOffset: number;
  getConfigValue: GetWebAppConfigValue;
}

export interface NavLinksProps {
  close: (property: keyof NavBarState) => ToggleEventHandler;
}

export interface AccountMenuProps {
  close: (property: keyof NavBarState) => ToggleEventHandler;
  logout: () => void;
}
