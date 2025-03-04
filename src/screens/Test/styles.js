import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 1,
    marginLeft: 100,
    marginRight: 100,
    marginTop:10,
    marginBottom:10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 135,
    borderColor: '#cccccc',
    borderWidth: 2,
    borderRadius: 20,
  },
  categoriesPhoto: {
    width: '48%',
    height: '70%',
    marginTop:10,
    //marginBottom:5,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    //elevation: 3,
  },
  categoriesName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
  },
  categoriesInfo: {
    //marginTop: 3,
    marginBottom: 10
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    color: '#333', // Text color
  },
});

export default styles;
