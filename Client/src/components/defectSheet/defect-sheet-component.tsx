import { classStyleDefinition }                 from './classStyleDefinition'
import Button                                   from '@material-ui/core/Button';
import FormControl                              from '@material-ui/core/FormControl';
import FormControlLabel                         from '@material-ui/core/FormControlLabel';
import Grid                                     from '@material-ui/core/Grid';
import InputLabel                               from '@material-ui/core/InputLabel';
import MenuItem                                 from '@material-ui/core/MenuItem';
import Paper                                    from '@material-ui/core/Paper';
import React                                    from 'react';
import RuleMandatory                            from '../../services/validation/rules/ruleProcessors/RuleMandatory';
import RuleMaxLength                            from '../../services/validation/rules/ruleProcessors/RuleMaxLength';
import Select                                   from '@material-ui/core/Select';
import Switch                                   from '@material-ui/core/Switch';
import ValidatedTextField                       from '../../services/validation/controls/TextField/ValidatedTextField';
import ValidationState                          from '../../services/validation/context/state/ValidationState';

function DefectSheetComponent() {

  const classStyles = classStyleDefinition();
  const inputLabel = React.useRef<HTMLLabelElement>(null);

  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  return (


    <div className={classStyles.root}>



      <form className={classStyles.form}>

        <ValidationState>

          <Paper className={classStyles.paper}>

            <Grid container spacing={0}>

              <Grid container xs={12} spacing={1}>
                <Grid item xs={3}>
                  <ValidatedTextField
                    name="registration"
                    label="Registration"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    autoFocus
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]} />
                </Grid>

                <Grid item xs={3}>

                  <FormControl variant="outlined"  margin="normal" fullWidth>
                    <InputLabel id="make-label" ref={inputLabel}>Make</InputLabel>
                    <Select
                      labelId="make-label"
                      id="make-outline"
                      labelWidth={labelWidth}
                      >
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value={10}>Alfa Remeo</MenuItem>
                      <MenuItem value={20}>Audi</MenuItem>
                      <MenuItem value={30}>BMW</MenuItem>
                      <MenuItem value={40}>Jaguar</MenuItem>
                      <MenuItem value={50}>Ford</MenuItem>
                      <MenuItem value={60}>volkswagen</MenuItem>
                    </Select>
                  </FormControl>

                </Grid>

                <Grid item xs={3}>
                  <ValidatedTextField
                    name="model"
                    label="Model"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]} />
                </Grid>
              </Grid>


              <Grid container xs={12} spacing={1}>


                <Grid item xs={3}>
                  <ValidatedTextField
                    name="drivername"
                    label="Driver Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    autoFocus
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]} />
                </Grid>

                <Grid item xs={3}>
                  <ValidatedTextField
                    name="location"
                    label="Location"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    autoFocus
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]} />
                </Grid>

                <Grid item xs={3}>
                  <FormControlLabel
                    control={<Switch color="primary" />}
                    label="Call out required ?" />
                </Grid>

                <Grid item xs={3}>
                  <ValidatedTextField
                    name="authorisedby"
                    label="Authorised By"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]} />
                </Grid>
              </Grid>


              <Grid container xs={12} spacing={1}>
                <Grid item xs={3}>
                  <ValidatedTextField
                    name="homedepot"
                    label="Home Depot"
                    fullWidth
                    margin="normal"
                    variant="outlined"

                    rules={[new RuleMandatory(), new RuleMaxLength(40)]} />
                </Grid>

                <Grid item xs={3}>
                  <ValidatedTextField
                    name="reportingdepot"
                    label="Reporting Depot"
                    fullWidth
                    margin="normal"
                    variant="outlined"

                    rules={[]} />
                </Grid>

                <Grid item xs={3}>
                  <ValidatedTextField
                    name="defectdate"
                    label="Defect Date"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    rules={[]} />
                </Grid>

                <Grid item xs={3}>
                  <ValidatedTextField
                    name="defecttime"
                    label="Defect Time"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    rules={[]} />
                </Grid>
              </Grid>


              <Grid container xs={12} spacing={1}>

                <Grid item xs={2}>
                  <FormControlLabel
                    control={<Switch color="primary" />}
                    label="VOR ?" />
                </Grid>

                <Grid item xs={2}>
                  <FormControlLabel
                    control={<Switch color="primary" />}
                    label="Roadside ?" />
                </Grid>

                <Grid item xs={2}>
                  <FormControlLabel
                    control={<Switch color="primary" />}
                    label="Accident Damage ?" />
                </Grid>



                <Grid item xs={2}>
                  <FormControlLabel
                    control={<Switch color="primary" />}
                    label="PG9 ?" />
                </Grid>

                <Grid item xs={2}>
                  <FormControlLabel
                    control={<Switch color="primary" />}
                    label="Passed to Agent ?" />
                </Grid>

              </Grid>





            </Grid>

          </Paper>


          <Paper className={classStyles.paper}>

            <Grid container spacing={0}>
            </Grid>
            <Grid container xs={12} spacing={1}>
              <Grid item xs={4}>
                <FormControlLabel
                  control={<Switch color="primary" />}
                  label="Passed to Agent ?" />
              </Grid>

              <Grid item xs={4}>
                <ValidatedTextField
                  name="preferredAgent"
                  label="Preferred Agent"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  rules={[]} />
              </Grid>



            </Grid>
          </Paper>


          <Paper className={classStyles.paper}>

            <Grid container spacing={0}>
            </Grid>
            <Grid container xs={12} spacing={1}>
              <Grid item xs={4}>
                <FormControlLabel
                  control={<Switch color="primary" />}
                  label="deferred Defect ?" />
              </Grid>

              <Grid item xs={4}>
                <ValidatedTextField
                  name="defectdate"
                  label="Defect Date"
                  fullWidth
                  margin="normal"
                  variant="outlined"

                  rules={[]} />
              </Grid>

              <Grid item xs={4}>
                <ValidatedTextField
                  name="defecttime"
                  label="Defect Time"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  rules={[]} />
              </Grid>

            </Grid>
          </Paper>


          <Paper className={classStyles.paper}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Button variant="contained" color="primary">Login</Button>
              </Grid>
            </Grid>
          </Paper>



        </ValidationState>
      </form>
    </div>

  );
}

export default DefectSheetComponent;