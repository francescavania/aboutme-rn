/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const Radius = 35;

export const HomeStyle = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    height: 200,
    backgroundColor: '#8795AF',
    borderBottomLeftRadius: Radius,
    borderBottomRightRadius: Radius,
    paddingHorizontal: 30,
    marginBottom:70
    
  },
  HeroContainer: {
    marginTop: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  HeroImage: {
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainText:{
    color:'#37383c',
    fontWeight : 'bold',
    fontSize:18
  },
  grayColor:{
    color:'#8795AF',
  },
  heroData:{
    backgroundColor:'#f2f5fa',
    borderRadius :10,
    paddingVertical:10
  },

  ButtonContainer: {
    height: 40,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    elevation: 2,
  },
  firstButton: {
    backgroundColor: 'white'
  },
  secondButton: {
    backgroundColor: '#5374FF'
  },


  container:{
    paddingHorizontal: 30,
  },
  article:{
    paddingRight:20
  },
  articleImage:{
    height: 120,
    width: 180,
    borderRadius: 10
  },
  articleText:{
    color:'#37383c',
    fontWeight : 'bold',
    fontSize:16,
    width:180
  },

  bottomContainer:{
    backgroundColor:'#739096',
    borderRadius: 10,
    padding:30,
    marginBottom:30
  },
  bottomTitle:{
    backgroundColor:'#3d636b',
    alignSelf: 'flex-start',
    padding:7,
    borderRadius: 10,
    fontSize:12,
    color:'white'
  },
  bottomText:{
    paddingTop:10,
    fontSize:16,
    fontWeight:'bold',
    color:'white'
  }
});
