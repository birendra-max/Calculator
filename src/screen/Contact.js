import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Linking, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (key, val) => {
    setForm({ ...form, [key]: val });
  };

  const handleSubmit = async () => {
    const fromBody = new URLSearchParams();
    fromBody.append("name", form.name);
    fromBody.append("email", form.email);
    fromBody.append("subject", form.subject);
    fromBody.append("message", form.message);

    try {
      const response = await fetch('https://birendrapradhan.in/submit_dat', {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: fromBody.toString()
      });

      const data = await response.text();
      if (data == 'Thank you for contacting me! Your message has been sent successfully') {
        Alert.alert("Success", "We’ve received your message. Thanks for contacting us!");
        setForm({ name: "", email: "", subject: "", message: "" });
      }
      else {
        Alert.alert("Error", data.message || "Something went wrong");
      }

    } catch (err) {
      Alert.alert("Error", "Failed to connect to server.");
    }


  };

  return (
    <LinearGradient
      colors={['#05070aff', '#090c11ff', '#111827']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Text style={styles.title}>Get in Touch</Text>
        <Text style={styles.subtitle}>I’d love to hear from you! Fill the form below or reach me directly.</Text>

        {/* Form Card */}
        <LinearGradient colors={['#1e293b', '#111827']} style={styles.formCard}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#94a3b8"
            value={form.name}
            onChangeText={(val) => handleChange("name", val)}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#94a3b8"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(val) => handleChange("email", val)}
          />

          <TextInput
            style={styles.input}
            placeholder="Subject"
            placeholderTextColor="#94a3b8"
            value={form.subject}
            onChangeText={(val) => handleChange("subject", val)}
          />

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Message"
            placeholderTextColor="#94a3b8"
            multiline={true}
            numberOfLines={4}
            value={form.message}
            onChangeText={(val) => handleChange("message", val)}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <LinearGradient colors={['#3b82f6', '#60a5fa']} style={styles.buttonGradient}>
              <Text style={styles.buttonText}>Send Message</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>

        {/* Contact Info Card */}
        <LinearGradient colors={['#1e293b', '#111827']} style={styles.infoCard}>
          <Text style={styles.infoTitle}>📞 Phone</Text>
          <Text style={styles.infoText} onPress={() => Linking.openURL("tel:+919692926869")}>
            +91 9692926869
          </Text>

          <Text style={styles.infoTitle}>✉ Email</Text>
          <Text style={styles.infoText} onPress={() => Linking.openURL("mailto:birendrapradhan112@gmail.com")}>
            birendrapradhan112@gmail.com
          </Text>

          <Text style={styles.infoTitle}>🌐 Website</Text>
          <Text style={styles.infoText} onPress={() => Linking.openURL("https://birendrapradhan.in")}>
            birendrapradhan.in
          </Text>

          <Text style={styles.infoTitle}>📍 Address</Text>
          <Text style={styles.infoText}>
            BTM Layout, 2nd Stage, Bangalore, Karnataka, India
          </Text>
        </LinearGradient>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  scrollContent: {
    alignItems: 'center',
    paddingTop: 70,
    paddingBottom: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#f8fafc',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 25,
    textAlign: 'center',
    lineHeight: 22,
  },
  formCard: {
    width: '100%',
    padding: 20,
    borderRadius: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  input: {
    width: '100%',
    backgroundColor: '#111827',
    color: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    marginTop: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  infoCard: {
    width: '100%',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3b82f6',
    marginTop: 10,
  },
  infoText: {
    fontSize: 15,
    color: '#e2e8f0',
    marginTop: 3,
    textDecorationLine: 'underline',
  },
});