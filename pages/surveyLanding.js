import { Card, Typography, CardContent, Grid } from "@material-ui/core";

export default function surveyLanding() {
    return (
        <div>
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
                        marginTop: "40px",
                      }}
                    >
                      <Typography variant="h3" display="inline">
                        Thank you for Submitting the Survey!
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "40px",
                      }}
                    >
                      <Typography variant="body3">
                        You may exit now
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
        </div>
      );
}