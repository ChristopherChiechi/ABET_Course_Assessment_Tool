import {
  Button,
  Card,
  Typography,
  Link,
  CardContent,
  MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
  Grid,
} from "@material-ui/core";
import API from "../api/api";
import Navigation from "../components/Navigation";
let theme = createTheme();
theme = responsiveFontSizes(theme);
export default function unAuthorized() {
  const logout = () => {
    new API().logout();
  };

  return (
    <div>
      <Navigation />
      <MuiThemeProvider theme={theme}>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "90vh" }}
        >
          <Grid item>
            <Card>
              <CardContent style={{ backgroundColor: "#EDF2F7" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "5px",
                  }}
                >
                  <Typography variant="h6" display="inline">
                    Wrong survey link
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "5px",
                  }}
                >
                  <Typography variant="body1">
                    Sorry, but your survey link is no longer active; please try
                    again or contact your instructor if the problem persists.
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "5px",
                  }}
                >
                  <Link href="/">Click here to go to the main page.</Link>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}
