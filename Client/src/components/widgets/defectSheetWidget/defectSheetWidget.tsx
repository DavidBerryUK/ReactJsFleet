import { classStyleDefinition }                 from './classStyleDefinition'
import Button                                   from '@material-ui/core/Button';
import FormControlLabel                         from '@material-ui/core/FormControlLabel';
import Grid                                     from '@material-ui/core/Grid';
import Paper                                    from '@material-ui/core/Paper';
import React                                    from 'react';
import RuleMandatory                            from '../../../services/validation/rules/ruleProcessors/RuleMandatory';
import RuleMaxLength                            from '../../../services/validation/rules/ruleProcessors/RuleMaxLength';
import SelectItemModel                          from '../../../services/validation/controls/selectFieldControl/SelectItemModel';
import Switch                                   from '@material-ui/core/Switch';
import ValidatedSelectFieldControl              from '../../../services/validation/controls/selectFieldControl/ValidatedSelectFieldControl';
import ValidatedTextFieldControl                from '../../../services/validation/controls/textFieldControl/ValidatedTextFieldControl';
import ValidationDebugInfoControl               from '../../../services/validation/controls/debugInfoControl/ValidationDebugInfoControl';
import ValidationState                          from '../../../services/validation/context/state/ValidationState';

function DefectSheetWidget() {

  const classStyles = classStyleDefinition();

  return (

    <div className={classStyles.root}>
      <form className={classStyles.form}>

        <ValidationState>

          <Paper className={classStyles.paper}>

            <Grid container spacing={0}>

              <Grid container xs={12} spacing={1}>
                <Grid item xs={3}>
                  <ValidatedTextFieldControl
                    name="registration"
                    label="Registration"
                    fullWidth
                    autoFocus
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]} />
                </Grid>

                <Grid item xs={3}>

                  <ValidatedSelectFieldControl
                    name="Manufacturer"
                    label="Manufacturer"
                    rules={[new RuleMandatory()]}
                    items={[
                      new SelectItemModel("10", "Alfa Romeo"),
                      new SelectItemModel("20", "Audi"),
                      new SelectItemModel("30", "BMW"),
                      new SelectItemModel("40", "Jaguar"),
                      new SelectItemModel("50", "Ford"),
                      new SelectItemModel("60", "Volkswagen"),
                    ]}
                  />
                </Grid>

                <Grid item xs={3}>
                  <ValidatedTextFieldControl
                    name="model"
                    label="Model"
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]} />
                </Grid>
              </Grid>

              <Grid container xs={12} spacing={1}>

                <Grid item xs={3}>
                  <ValidatedTextFieldControl
                    name="drivername"
                    label="Driver Name"
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]} />
                </Grid>

                <Grid item xs={3}>
                  <ValidatedTextFieldControl
                    name="location"
                    label="Location"
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]} />
                </Grid>

                <Grid item xs={3}>
                  <FormControlLabel
                    control={<Switch color="primary" />}
                    label="Call out required ?" />
                </Grid>

                <Grid item xs={3}>
                  <ValidatedTextFieldControl
                    name="authorisedby"
                    label="Authorised By"
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]} />
                </Grid>
              </Grid>


              <Grid container xs={12} spacing={1}>
                <Grid item xs={3}>
                  <ValidatedTextFieldControl
                    name="homedepot"
                    label="Home Depot"
                    rules={[new RuleMandatory(), new RuleMaxLength(40)]} />
                </Grid>

                <Grid item xs={3}>
                  <ValidatedTextFieldControl
                    name="reportingdepot"
                    label="Reporting Depot"
                    rules={[]} />
                </Grid>

                <Grid item xs={3}>
                  <ValidatedTextFieldControl
                    name="defectdate"
                    label="Defect Date"
                    rules={[]} />
                </Grid>

                <Grid item xs={3}>
                  <ValidatedTextFieldControl
                    name="defecttime"
                    label="Defect Time"
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
                <ValidatedTextFieldControl
                  name="preferredAgent"
                  label="Preferred Agent"
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
                <ValidatedTextFieldControl
                  name="defectdate"
                  label="Defect Date"
                  rules={[]} />
              </Grid>

              <Grid item xs={4}>
                <ValidatedTextFieldControl
                  name="defecttime"
                  label="Defect Time"
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

          <ValidationDebugInfoControl></ValidationDebugInfoControl>

        </ValidationState>
      </form>
    </div>

  );
}

export default DefectSheetWidget;