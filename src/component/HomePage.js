import React, { useState, useEffect } from "react";
import "./HomePage.css";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

export default function HomePage() {
  const [Data, setData] = useState({
    Notes: "",
    DataAgendada: "",
    HoraAgendada: "",
    OrderBy: "DESC",
    Segunda: false,
    Terca: false,
    Quarta: false,
    Quinta: false,
    Sexta: false,
    Sabado: false,
    Domingo: false,
    NotesFlag: false
  });

  const handleChangeOrderBy = (event) => {
    console.log("Order By: ", event.target.value);
    
    setData({...Data,OrderBy: event.target.value});
  };

  const handleDone = () =>{
    setData({...Data,NotesFlag: false})
    if (Data.Notes === ""){
        setData({...Data,NotesFlag: true})
        console.log("Anotação é campo obrigatório");
        return;
    }

    console.log("Data:", Data);
  }

  return (
    <div className="Container">
      <div className="Sub-Container">
        <div className="Box1">
          <TextField
          error={Data.NotesFlag}
            className="Notes"
            label="Anotações"
            fullWidth
            size="small"
            variant="outlined"
            value={Data.Notes}
            onChange={(e) => {setData({...Data, Notes:e.target.value})}}
                
          />
          <div className="Data">
            Data agendada
            <TextField
              className="DataAgendada"
              size="small"
              variant="outlined"
              type="date"
              value={Data.DataAgendada}
              onChange={(e) => {
                setData({ ...Data, DataAgendada: e.target.value })}}
            />
            Hora agendada
            <TextField
              className="HoraAgendada"
              size="small"
              variant="outlined"
              type="time"
              value={Data.HoraAgendada}
              onChange={(e) => {
                setData({ ...Data, HoraAgendada: e.target.value })}}
             />
            
          </div>
          <div className="Feito">
            <RadioGroup
              className="RadioGroup"
              value={Data.OrderBy}
              onChange={handleChangeOrderBy}
            >
              <FormControlLabel value="ASC" control={<Radio />} label="Asc" />
              <FormControlLabel value="DESC" control={<Radio />} label="Desc" />
            </RadioGroup>
            <div style={{ height: 60 }}>
              <div style={{ width: 350, height: 22, display: "flex" }}>
                <div
                  style={{ flex: 1, display: "flex", justifyContent: "center" }}
                >
                  Seg
                </div>
                <div
                  style={{ flex: 1, display: "flex", justifyContent: "center" }}
                >
                  Ter
                </div>
                <div
                  style={{ flex: 1, display: "flex", justifyContent: "center" }}
                >
                  Qua
                </div>
                <div
                  style={{ flex: 1, display: "flex", justifyContent: "center" }}
                >
                  Qui
                </div>
                <div
                  style={{ flex: 1, display: "flex", justifyContent: "center" }}
                >
                  Sex
                </div>
                <div
                  style={{ flex: 1, display: "flex", justifyContent: "center" }}
                >
                  Sab
                </div>
                <div
                  style={{ flex: 1, display: "flex", justifyContent: "center" }}
                >
                  Dom
                </div>
              </div>
              <div style={{ width: 350, height: 22, display: "flex" }}>
                <Checkbox
                  style={{ flex: 1 }}
                    checked={Data.Segunda}
                    onChange={(e)=>{setData({...Data,Segunda:e.target.checked})}}
                />
                <Checkbox
                  style={{ flex: 1 }}
                  checked={Data.Terca}
                  onChange={(e)=>{setData({...Data,Terca:e.target.checked})}}
                />
                <Checkbox
                  style={{ flex: 1 }}
                  checked={Data.Quarta}
                  onChange={(e)=>{setData({...Data,Quarta:e.target.checked})}}
                />
                <Checkbox
                  style={{ flex: 1 }}
                  checked={Data.Quinta}
                  onChange={(e)=>{setData({...Data,Quinta:e.target.checked})}}
                />
                <Checkbox
                  style={{ flex: 1 }}
                  checked={Data.Sexta}
                  onChange={(e)=>{setData({...Data,Sexta:e.target.checked})}}
                />
                <Checkbox
                  style={{ flex: 1 }}
                  checked={Data.Sabado}
                  onChange={(e)=>{setData({...Data,Sabado:e.target.checked})}}
                />
                <Checkbox
                  style={{ flex: 1 }}
                  checked={Data.Domingo}
                  onChange={(e)=>{setData({...Data,Domingo:e.target.checked})}}
                />
              </div>
            </div>
            <div className="Button">
              <Button variant="contained" color="primary" onClick ={()=>{handleDone()}}>
                <ThumbUpIcon /> &nbsp; Feito
              </Button>
            </div>
          </div>
        </div>
        <div className="Box2">
          <div
            className="Data-flex"
            style={{ margin: "7px 0 0 0", color: "blue" }}
          >
            <div className="NoteId" style={{ flex: 1 }}>
              Id
            </div>
            <div
              className="Notes"
              style={{
                width: 300,
                margin: "0 30px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Anotação
            </div>
            <div
              className="Dias"
              style={{ flex: 3, display: "flex", justifyContent: "center" }}
            >
              Dias
            </div>
            <div
              className="DataAgendada"
              style={{ flex: 2.5, display: "flex", justifyContent: "center" }}
            >
              Data agendada
            </div>
            <div
              className="HoraAgendada"
              style={{ flex: 2.5, display: "flex", justifyContent: "center" }}
            >
              {" "}
              Hora agendada
            </div>
            <div
              className="Operacoes"
              style={{ flex: 2.5, display: "flex", justifyContent: "center" }}
            >
              Configuração
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
