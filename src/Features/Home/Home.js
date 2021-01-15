import React, {Component} from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import {HomeStyle} from './style';
import {GlobalStyle} from '../../Shared/GlobalStyle/style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      articleImage:'https://images.unsplash.com/photo-1610133748830-71597c3ccae8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      };
  }

  changeImage() {
    if (this.state.status) {
      this.setState({
        status: false,
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      });
    } else {
      this.setState({
        status: true,
        image:
          'https://images.unsplash.com/photo-1515734674582-29010bb37906?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      });
    }
  }
  onPressButton() {  
    alert('You clicked the button!')  
  }  

  render() {
    return (
      <View style={[HomeStyle.Container]}>
        <View style={HomeStyle.topContainer}>
          <View style={HomeStyle.HeroContainer}>
            <View style={[HomeStyle.flexRow,{paddingBottom:15}]}>
              <Image
                source={{uri: this.state.image}}
                style={HomeStyle.HeroImage}
              />
              <View style={{paddingVertical:5,paddingHorizontal:15}}>
                <Text style={HomeStyle.mainText}>Nyemot</Text>
                <Text style={[HomeStyle.grayColor,{paddingBottom:10}]}>Associate Editor</Text>
                <View style={[HomeStyle.flexRow,HomeStyle.heroData]}>
                  <View style={{paddingHorizontal:8}}>
                    <Text style={[HomeStyle.grayColor,{fontSize:10}]}>Articles</Text>
                    <Text style={[HomeStyle.mainText,GlobalStyle.centeredText]}>34</Text>
                  </View>
                  <View style={{paddingHorizontal:8}}>
                    <Text style={[HomeStyle.grayColor,{fontSize:10}]}>Followers</Text>
                    <Text style={[HomeStyle.mainText,GlobalStyle.centeredText]}>980</Text>
                  </View>
                  <View style={{paddingHorizontal:8}}>
                    <Text style={[HomeStyle.grayColor,{fontSize:10}]}>Ratings</Text>
                    <Text style={[HomeStyle.mainText,GlobalStyle.centeredText]}>8.9</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={HomeStyle.flexRow}>
              <TouchableOpacity
                onPress={() => this.onPressButton()} 
                activeOpacity={0.7}
                style={[HomeStyle.ButtonContainer, HomeStyle.firstButton]} 
                >
                <Text style={HomeStyle.grayColor}>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[HomeStyle.ButtonContainer, HomeStyle.secondButton]}
                onPress={() => this.onPressButton()} 
                activeOpacity={0.7}>
                <Text style={{color: 'white'}}>Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={HomeStyle.container}>
          <Text style={HomeStyle.mainText}>Notable Works</Text>
          <Text style={[HomeStyle.grayColor,{paddingBottom:20}]}>Based on the asdasdasd</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={HomeStyle.article}>
              <Image
                source={{uri: this.state.articleImage}}
                style={HomeStyle.articleImage}
              />
              <Text style={[HomeStyle.grayColor,{fontSize:13}]}>Nature</Text>
              <Text style={HomeStyle.articleText}>Let us asdasd asdasd asdasd</Text>
            </View>
            <View style={HomeStyle.article}>
              <Image
                source={{uri: this.state.articleImage}}
                style={HomeStyle.articleImage}
              />
              <Text style={[HomeStyle.grayColor,{fontSize:13}]}>Nature</Text>
              <Text style={HomeStyle.articleText}>Let us asdasd asdasd asdasd</Text>
            </View>
            <View style={HomeStyle.article}>
              <Image
                source={{uri: this.state.articleImage}}
                style={HomeStyle.articleImage}
              />
              <Text style={[HomeStyle.grayColor,{fontSize:13}]}>Nature</Text>
              <Text style={HomeStyle.articleText}>Let us asdasd asdasd asdasd</Text>
            </View>
          </ScrollView>
        </View>
        <View style={HomeStyle.container}>
          <View style={HomeStyle.bottomContainer}>
            <Text style={HomeStyle.bottomTitle}>Featured Article</Text>
            <Text style={HomeStyle.bottomText}>Natural mood blabla asdasd asdasd asdasd asdasd</Text>
          </View>
          {/* <TouchableOpacity
            onPress={() => this.changeImage()}
            activeOpacity={0.7}
            style={[HomeStyle.ButtonContainer, HomeStyle.secondButton]}>
            <Text style={{color: 'white'}}>Follow</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

export default Home;
