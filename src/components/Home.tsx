import {List, ListItem, Stack, Typography} from "@mui/material";

export function Home() {
    return (
        <Stack height="100%" width="100%" alignItems="flex-start">
            <Typography variant="h1">Hi, I'm ______</Typography>
            <Typography variant="h2">I'm a student at ______, studying _____</Typography>
            <Typography variant="h3">I'm really interested in a few things: </Typography>
            <List>
                <ListItem>First</ListItem>
                <ListItem>Second</ListItem>
                <ListItem>Third</ListItem>
            </List>
        </Stack>
    )
}