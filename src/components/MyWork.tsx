import {Button, Card, CardActions, CardContent, CardHeader, Grid, Stack, Typography} from "@mui/material";

export function MyWork() {
    return (
        <Stack height="100%" width="100%" gap={1} alignItems="center">
            <Typography variant="h1">My Work</Typography>
            <Grid container gap={1} justifyContent="center">
                <Grid item>
                    <Card>
                        <CardHeader title={<Typography variant="h4">Article 1</Typography>}/>
                        <CardContent>
                            <img src="../../public/nyan.jpeg" alt="nyan"/>
                            <Typography>
                                This is where a short description could go
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>
                                link to the article
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardHeader title={<Typography variant="h4">Article 2</Typography>}/>
                        <CardContent>
                            <img src="../../public/nyan.jpeg" alt="nyan"/>
                            <Typography>
                                This is where a short description could go
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>
                                link to the article
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardHeader title={<Typography variant="h4">Article 3</Typography>}/>
                        <CardContent>
                            <img src="../../public/nyan.jpeg" alt="nyan"/>
                            <Typography>
                                This is where a short description could go
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>
                                link to the article
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Stack>
    )
}