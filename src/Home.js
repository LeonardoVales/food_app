import React from 'react';
import { View, 
         Text, 
         StyleSheet,
         ImageBackground, 
         Dimensions,
         StatusBar
        } from 'react-native';

// import { Container } from './styles';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import All from './home_child/All';
import Menu from './home_child/Menu';
import Popular from './home_child/Popular';


export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.header}>
                    <ImageBackground
                        source={require('./asset/header.png')}
                        style={styles.imageBackground}
                    >
                        <Text style={styles.title}>HOME</Text>
                    </ImageBackground>
                </View>
                <View style={styles.tabbar}>
                <ScrollableTabView
                    style={{ marginTop: 20 }}
                    initialPage={0}
                    tabBarActiveTextColor='green'
                    renderTabBar={() => <DefaultTabBar 
                        underlineStyle={{
                            backgroundColor: 'green'
                        }}
                    />}
                >
                    <All tabLabel='All' props={this.props} />
                    <Menu tabLabel='Menu' props={this.props} />
                    <Popular tabLabel='Popular' props={this.props} />
                </ScrollableTabView>                
                </View>
            </View>
        );
    }
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    header: {
        marginTop: 0,    
        position: 'absolute'    
    },
    tabbar: {
        flex: 1,
        marginTop: width*0.3,
        paddingHorizontal: 30
    },
    imageBackground: {
        width: width*0.5,
        height: width*0.4,
        alignItems: 'center',
    },
    title: {
        color: 'white',
        marginTop: 16,
        fontWeight: 'bold',
        fontSize: 25,
    }
});
  