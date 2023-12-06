import { StackNavigationProp } from "@react-navigation/stack";

export type UserRootStackParamList = {
    Menu: undefined;
    Game: undefined;
    Settings: undefined;
    About: undefined;
};

export type StackNavigation = StackNavigationProp<UserRootStackParamList>;