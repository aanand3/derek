import {Stack, Typography} from "@mui/material";

export function AboutMe() {
    return (
        <Stack height="100%" width="100%" alignItems="center">
            <Stack gap={1} alignItems="flex-end" width="100%">
                <Typography variant="h1">Education</Typography>
                <Typography variant="h4" fontWeight="bold">My school</Typography>
                <Typography variant="h5">This is what I studied</Typography>
                <Typography variant="h6">GPA 9.99</Typography>
            </Stack>
            <Stack gap={1} alignItems="flex-start" width="100%">
                <Typography variant="h1">Work Experience</Typography>
                <Typography variant="h4" fontWeight="bold">My job</Typography>
                <Typography variant="h5">This is what I did</Typography>
                <Typography variant="h6">2020-2021</Typography>
            </Stack>
            <Stack gap={1} alignItems="flex-end" width="100%">
                <Typography variant="h1">Skills</Typography>
                <Typography variant="h4" fontWeight="bold">Karate</Typography>
                <Typography variant="h5">I can break things</Typography>
                <Typography variant="h6">2009-2020</Typography>
            </Stack>
            <Stack gap={1} alignItems="flex-start" width="100%">
                <Typography variant="h1">Languages</Typography>
                <Typography variant="h4" fontWeight="bold">Spanish</Typography>
                <Typography variant="h5">Learned in school, practiced regularly by volunteering</Typography>
                <Typography variant="h6">2021-2021</Typography>
            </Stack>
        </Stack>
    )
}