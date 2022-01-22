import React from 'react';
import {ContainerSideBar, ContainerSideBarUl, ContainerSideBarLi, ContainerSideBarIcon} from './index.Styled'
const Sidebar = () => {
    return (
        <ContainerSideBar>
            <ContainerSideBarUl>
                <ContainerSideBarLi> 
                    <input 
                    style={{width:"100%", padding: 10, borderRadius: 10, border: 0, marginRight: 6, }}
                    placeholder="Pesquisar ou comercar uma nova conversa"/>
                </ContainerSideBarLi>
                <ContainerSideBarLi>
                    <ContainerSideBarIcon>
                        <img src={"https://joeschmoe.io/api/v1/random"} style={{ width: 32 }} alt={"imag"}/>
                        <p>Carlos </p>
                    </ContainerSideBarIcon>
                    <p>13:43</p>
                </ContainerSideBarLi>
                <hr />
                <ContainerSideBarLi>
                    <ContainerSideBarIcon>
                        <img src={"https://joeschmoe.io/api/v1/random"} style={{ width: 32 }} alt={"imag"}/>
                        <p>Henrique</p>
                    </ContainerSideBarIcon>
                    <p>14:08</p>    
                </ContainerSideBarLi>
                <hr />
                <ContainerSideBarLi>
                    <ContainerSideBarIcon><img src={"https://joeschmoe.io/api/v1/random"} style={{ width: 32 }} alt={"imag"}/>
                    <p>Clarice Costa</p></ContainerSideBarIcon>
                    <p>06:17</p>
                </ContainerSideBarLi>
                <hr />
                <ContainerSideBarLi>
                    <ContainerSideBarIcon><img src={"https://joeschmoe.io/api/v1/random"} style={{ width: 32 }} alt={"imag"}/>
                    <p>Gerlane Silva</p></ContainerSideBarIcon>
                    <p>23:08</p>
                </ContainerSideBarLi>
                <hr />
                <ContainerSideBarLi>
                    <ContainerSideBarIcon><img src={"https://joeschmoe.io/api/v1/random"} style={{ width: 32 }} alt={"imag"}/>
                    <p>Roberta</p></ContainerSideBarIcon>
                    <p>17:30</p>
                </ContainerSideBarLi>
                <hr />
                <ContainerSideBarLi>
                    <ContainerSideBarIcon><img src={"https://joeschmoe.io/api/v1/random"} style={{ width: 32 }} alt={"imag"}/>
                    <p>Bruno Castro</p></ContainerSideBarIcon>
                    <p>21:24</p>
                </ContainerSideBarLi>
                <hr />
                <ContainerSideBarLi>
                    <ContainerSideBarIcon><img src={"https://joeschmoe.io/api/v1/random"} style={{ width: 32 }} alt={"imag"}/>
                    <p>Marcelo</p></ContainerSideBarIcon>
                    <p>15:12</p>
                </ContainerSideBarLi>
                <hr />
                <ContainerSideBarLi>
                    <ContainerSideBarIcon><img src={"https://joeschmoe.io/api/v1/random"} style={{ width: 32 }} alt={"imag"}/>
                    <p>Filho</p></ContainerSideBarIcon>
                    <p>11:43</p>
                </ContainerSideBarLi>
                <hr />
                <ContainerSideBarLi>
                    <ContainerSideBarIcon><img src={"https://joeschmoe.io/api/v1/random"} style={{ width: 32 }} alt={"imag"}/>
                    <p>Francisca</p></ContainerSideBarIcon>
                    <p>05:03</p>
                </ContainerSideBarLi>
                <hr />
                <ContainerSideBarLi>
                    <ContainerSideBarIcon><img src={"https://joeschmoe.io/api/v1/random"} style={{ width: 32 }} alt={"imag"}/>
                    <p>Murilo</p></ContainerSideBarIcon>
                    <p>04:43</p>
                </ContainerSideBarLi>
                <hr />
               
            </ContainerSideBarUl>
        </ContainerSideBar>
    );
}

export default Sidebar;
