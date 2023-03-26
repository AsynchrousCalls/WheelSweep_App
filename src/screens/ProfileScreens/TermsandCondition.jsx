import { StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TermsandCondition= () => {
 
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.heading}>Term of use</Text>
        <Text style={styles.text}>
          A Terms and Conditions agreement acts as a legal contract between you
          (the company) and the user. It's where you maintain your rights to
          exclude users from your app in the event that they abuse your
          website/app, set out the rules for using your service and note other
          important details and disclaimers. Having a Terms and Conditions
          agreement is completely optional. No laws require you to have one. Not
          even the super-strict and wide-reaching General Data Protection
          Regulation (GDPR). Your Terms and Conditions agreement will be
          uniquely yours. While some clauses are standard and commonly seen in
          pretty much every Terms and Conditions agreement, it's up to you to
          set the rules and guidelines that the user must agree to. Terms and
          Conditions agreements are also known as Terms of Service or Terms of
          Use agreements. These terms are interchangeable, practically speaking.
          Having a Terms and Conditions agreement is completely optional. No
          laws require you to have one. Not even the super-strict and
          wide-reaching General Data Protection Regulation (GDPR).
        </Text>
        <Text style={styles.heading}>Privacy Policy</Text>
        <Text style={styles.text}>  
            Having a Terms and Conditions agreement is completely optional. No
            laws require you to have one. Not even the super-strict and
            wide-reaching General Data Protection Regulation (GDPR). Your Terms
            and Conditions agreement will be uniquely yours. While some clauses
            are standard and commonly seen in pretty much every Terms and
            Conditions agreement, it's up to you to set the rules and guidelines
            that the user must agree to. Terms and Conditions agreements are also
            known as Terms of Service or Terms of Use agreements. These terms are
            interchangeable, practically speaking.
            Having a Terms and Conditions agreement is completely optional. No
            laws require you to have one. Not even the super-strict and
            wide-reaching General Data Protection Regulation (GDPR). Your Terms
            and Conditions agreement will be uniquely yours. While some clauses
            are standard and commonly seen in pretty much every Terms and
            Conditions agreement, it's up to you to set the rules and guidelines
            that the user must agree to. Terms and Conditions agreements are also
            known as Terms of Service or Terms of Use agreements. These terms are
            interchangeable, practically speaking.
          </Text>
      </View>
    </View>
  );
};

export default TermsandCondition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeee4',
  },
  heading:{
    fontSize:20,
    fontWeight:"bold",

  },
  text: {
    margin: 1,
    padding:20,

  },
});
