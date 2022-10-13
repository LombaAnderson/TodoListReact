import React from 'react'
import "./HomePage.css"
import TextField from "@material-ui/core/TextField";

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
            </div>
          </div>
          <div className="Box2"></div>
        </div>
      </div>
    );
}