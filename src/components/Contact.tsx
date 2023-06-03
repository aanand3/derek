import {Button, Stack, Typography} from "@mui/material";

export function Contact() {
    return (
        <Stack height="100%" width="100%">
            <Typography variant="h1">Let's chat!</Typography>
            <Button href="mailto:email@email.com">📧 Email me</Button>
            <Button href="https://github.com" target="_blank">💻 Find me on GitHub</Button>
        </Stack>
    )
}