# Form Pendaftaran Universitas Ciputra Makassar

This project contains a simple registration form designed as part of the Week 10 Lab Assignment for a Web Programming course. It utilizes HTML, Bootstrap, and JavaScript to create a user-friendly form with client-side validation and dynamic output display upon submission.

### Project Contents

1. **index.html**: The main HTML file containing the registration form.
2. **script.js**: JavaScript code for form validation and event handling.
3. **styles.css**: Local CSS file for styling the form.

### Form Components

The registration form comprises the following sections:

- **Nama**: Text field for the student's name.
- **E-mail**: Text field for entering the email address.
- **Tanggal Lahir**: Date picker with a maximum limit set to the current date.
- **Gender**: Radio buttons for selecting gender (Male/Female).
- **Program Studi**: Dropdown to choose a program of study.
- **Alamat**: Text field for entering the home address.
- **Nomor Telepon**: Dropdown for country code and a text field for the phone number.
- **Nama Ibu**: Text field for entering the mother's name.
- **Nama Ayah**: Text field for entering the father's name.
- **Foto Diri**: File input to upload an image.

### JavaScript Validation

The JavaScript code includes:

- Validation for the required fields.
- Date of Birth field validation (not exceeding today's date).
- Email validation.
- Phone number validation.
- File input validation for uploading an image.

### Submission Process

The form's submit event is intercepted to prevent default form submission behavior. The form data is serialized and displayed in a formatted table upon submission. A preview of the uploaded photo is generated, with validation to ensure the file is a valid image. The output is displayed below the form.

### Setup and Usage

To use this project:

1. Clone or download the repository.
2. Open `index.html` in a web browser to view and interact with the registration form.
3. Fill out the form and click "Submit" to see the generated output.
4. Ensure your internet connection allows access to Bootstrap's CDN for CSS and JS files.
5. Make sure JavaScript is enabled in your browser.

### Notes

- This project is intended for educational purposes as part of a lab assignment.
- The validation is client-side only; for real-world applications, server-side validation and security checks are required.
- Be cautious when handling sensitive data through client-side JavaScript.

### Licensing and Contributions

- This project is open source, primarily for educational use.
- Contributions and modifications are welcome. Follow standard open-source contribution practices.

### Contact

If you encounter any issues or have questions, please contact:

- Email: leowidj@gmail.com
