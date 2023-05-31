import {AppBar, Stack, Typography} from "@mui/material";
import {Component} from "../types/Component";

type NavBarProps = {
    setComponent: (component: Component) => void
}
export function NavBar({setComponent}: NavBarProps) {
    return (
        <AppBar position="fixed">
            <Stack direction="row" minHeight="64px" alignItems="center" justifyContent="space-between" px={1}
                   backgroundColor="black">
                <Typography variant="h3" onClick={() => setComponent(Component.Home)}>⚡︎</Typography>
                <Stack direction="row" gap={1} alignItems="center" divider={<>//</>}>
                    <Typography variant="h6" onClick={() => setComponent(Component.MyWork)}>my work</Typography>
                    <Typography variant="h6" onClick={() => setComponent(Component.AboutMe)}>about me</Typography>
                    <Typography variant="h6" >get in touch</Typography>
                </Stack>
            </Stack>
        </AppBar>
    );
}