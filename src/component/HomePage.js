import React from "react";
import "./HomePage.css";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

export default function HomePage() {
  return (
    <div className="Container">
      <div className="Sub-Container">
        <div className="Box1">
          <TextField
            className="Nota"
            label="Notas"
            fullWidth
            size="small"
            variant="outlined"
          />
          <div className="Data">
            Data agendada
            <TextField
              className="Data-Agendada"
              size="small"
              variant="outlined"
              type="date"
            />
            Hora agendada
            <TextField
              className="Hora-Agendada"
              size="small"
              variant="outlined"
              type="time"
            />
            <div className="Data">

            </div>
          </div>
          <div className="Feito">
            <RadioGroup
              
              className="RadioGroup"
            //   value={value}
            //   onChange={handleChange}
            >
              <FormControlLabel
                value="ASC"
                control={<Radio />}
                label="Asc"
              />
              <FormControlLabel value="DESC" 
              control={<Radio />} 
              label="Desc" />
            </RadioGroup>
            <div style={{ height:60}}>
                <div style={{width: 350, height:22, display:"flex"}}>
                    <div style = {{flex:1, display:'flex', justifyContent:'center'}}>Seg</div>
                    <div style = {{flex:1, display:'flex', justifyContent:'center'}}>Ter</div>
                    <div style = {{flex:1, display:'flex', justifyContent:'center'}}>Qua</div>
                    <div style = {{flex:1, display:'flex', justifyContent:'center'}}>Qui</div>
                    <div style = {{flex:1, display:'flex', justifyContent:'center'}}>Sex</div>
                    <div style = {{flex:1, display:'flex', justifyContent:'center'}}>Sab</div>
                    <div style = {{flex:1, display:'flex', justifyContent:'center'}}>Dom</div>
                </div>
                <div style={{width: 350, height:22, display:"flex"}}>
                <Checkbox
                 style = {{flex:1}}
                //   checked={checked}
                //   onChange={handleChange}                 
                />
                     <Checkbox
                     style = {{flex:1}}
                //   checked={checked}
                //   onChange={handleChange}                 
                />
                     <Checkbox
                     style = {{flex:1}}
                //   checked={checked}
                //   onChange={handleChange}                 
                />
                     <Checkbox
                     style = {{flex:1}}
                //   checked={checked}
                //   onChange={handleChange}                 
                />
                     <Checkbox
                     style = {{flex:1}}
                //   checked={checked}
                //   onChange={handleChange}                 
                />
                     <Checkbox
                     style = {{flex:1}}
                //   checked={checked}
                //   onChange={handleChange}                 
                />
                     <Checkbox
                     style = {{flex:1}}
                //   checked={checked}
                //   onChange={handleChange}                 
                />
          
                </div>
            </div>
            <div className="Button">
            <Button variant="contained" color="primary">
            Feito
         </Button>
         </div>
          </div>
        </div>
        <div className="Box2"></div>
      </div>
    </div>
  );
}
