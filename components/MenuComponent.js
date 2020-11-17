import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem,Avatar  } from 'react-native-elements';

function Menu(props) {
  {/* ../assets/images/buffet.png" */}
    const renderMenuItem = ({item, index}) => {

        return (
                
                  <ListItem
                  key={index}
                  hideChevron={true}
                  onPress={() => {props.onPress(item.id);console.log('test'+item.id)}}

               
                >
                     <Avatar source={ {uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" } } />
                <ListItem.Content>
                    <ListItem.Title >
                             {item.name}
                    </ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
            <FlatList 
                data={props.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
}


export default Menu;