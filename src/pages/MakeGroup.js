import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled, { StyledComponent } from "styled-components";
import {mgState} from '../state'
const Contain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px 0px;
    justify-content: space-around;
    width: calc(100% - 100px);
    height: 100%;
    font-size: 2rem;
`
const InputBox = styled.input`
    width: 80%;
    height: 10%;
    font-size: 23px;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 70%;
`
const Submit = styled.div`
    margin-top: 20px;
    width: 50%;
    height: 50px;
    border-radius: 100px;
    text-align: center;
    border: solid black 4px;
    cursor: pointer;
`
function MakeGroup() {
    const [name, setName] = useState("");
    const [des, setDes] = useState("");
    const [mg, setmg] = useRecoilState(mgState)
    return (
        <Contain>
            <div style={{"font-size":"70px"}}>그룹생성</div>
            그룹이름
            <InputBox type="text" onChange={(e)=>{setName(e.target.value)}}></InputBox>
            <br/>
            한줄 설명
            <InputBox type="text" onChange={(e)=>{setDes(e.target.value)}}></InputBox>
            <Submit onClick={()=>{
                axios.post('/api/group',
                {
                    "name": name,
                    "description": des
                })
                .then(()=>{setmg(!mg)})
                .catch(err=>{alert("그룹이름이 중복되었거나 올바르지 않습니다.")})
            }}>생성!</Submit>
        </Contain>
    )
}


export default MakeGroup;