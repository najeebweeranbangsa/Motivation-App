import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
// Reduce the margin on top to 10 units
 
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    fontSize: 14, // Reduce the font size to 14 units
    marginTop: 1 
  }
});

export default styles;
