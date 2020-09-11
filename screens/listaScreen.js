import React, {useState, useEffect} from 'react';
import { ListItem, Header, Button } from 'react-native-elements'
import { View} from 'react-native';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';


export default function ListaScreen({navigation}){
    const [dados, setDados] = useState([]);

    useEffect(() =>{
        async function listUsuarios(){
            axios.get('http://professornilson.com/testeservico/clientes')
                .then(function (response) {
                    setDados(response.data);
                })
                .catch(function (error) {
                    alert("Erro ao capturar lista de usuarios");
                });
            }

        listUsuarios();
    })

    return (
        <View>
            <Header centerComponent={{text:'Lista', style:{color:'#fff', fontSize:20}}}
                rightComponent={
                    <Button title='+' onPress={()=>navigation.navigate('Crud')}></Button>
                }/>
            <ScrollView>
            {
                dados.map((l, i) => (
                <ListItem key={i} 
                    bottomDivider
                    title={l.nome}
                    subtitle={l.telefone}
                    chevron
                    onPress={()=>navigation.navigate('Crud',{
                        nome:l.nome,
                        telefone:l.telefone,
                        cpf:l.cpf,
                        id:l.id,
                        alterar:true 
                     })}
                />
                    
                ))
            }
            </ScrollView>
        </View>  
    )
}