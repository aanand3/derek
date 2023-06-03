import {AppBar, Stack, Typography} from "@mui/material";
import {ComponentOptions} from "../types/ComponentOptions";

type NavBarProps = {
    setComponent: (component: ComponentOptions) => void
}
export function NavBar({setComponent}: NavBarProps) {
    return (
        <AppBar>
            <Stack direction="row" minHeight="64px" alignItems="center" justifyContent="space-between" px={1}>
                <Typography variant="h3" onClick={() => setComponent(ComponentOptions.Home)}>⚡︎</Typography>
                <Stack direction="row" gap={1} alignItems="center" divider={<>//</>}>
                    <Typography variant="h6" onClick={() => setComponent(ComponentOptions.MyWork)}>my work</Typography>
                    <Typography variant="h6" onClick={() => setComponent(ComponentOptions.AboutMe)}>about me</Typography>
                    <Typography variant="h6" onClick={() => setComponent(ComponentOptions.Contact)}>get in touch</Typography>
                </Stack>
            </Stack>
        </AppBar>
    );
}