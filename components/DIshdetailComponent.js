import React, { Component } from 'react';
import { View, Image, Text,StyleSheet,Button } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'

function RenderDish(props) {

    const dish = props.dish;
    
        if (dish != null) {
            return(
                <View style={{ overflow: 'hidden' }}>  
                
               
                <Card>
                <Card.Title>{dish.name} </Card.Title>
                <View style={{flexDirection:'row'}}>
                
                <Image source={require('../assets/images/uthappizza.png')}></Image>
                
                    <Text style={{paddingRight: 99,paddingLeft:20}}>
                        {dish.description}
                    </Text></View>
                </Card>
                    
                </View>
            );
        }
        else {
            return(<View></View>);
        }
}

function Dishdetail(props) {
    return(<RenderDish dish={props.dish} />);
}

export default Dishdetail;
