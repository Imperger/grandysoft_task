const fakeUsers = ['Milo', 'Hassan', 'Kailey', 'Cornelius', 'Cameron', 'Donna', 'Scarlet', 'Koen', 'Macie', 'Keith',
    'Levi', 'Cassidy', 'Fernando', 'Ava', 'Kaleb', 'Devin', 'Roman', 'Mckinley', 'Adam', 'Carolyn',
    'Brady', 'America', 'Valentin', 'Jerimiah', 'Kyson', 'Skye', 'Dale', 'Gisselle', 'Jacqueline', 'Rolando',
    'Kameron', 'Mekhi', 'Amaris', 'Dalia', 'Angelica', 'Evelyn', 'Alissa', 'Thaddeus', 'Jaqueline', 'Marisa',
    'Amir', 'Quintin', 'Daisy', 'Landin', 'Jayden', 'Draven', 'Mareli', 'Aryana', 'Colton', 'Nathaniel',
    'Sylvia', 'Kellen', 'Cordell', 'Audrina', 'Lauryn', 'Isabel', 'Esteban', 'Esperanza', 'Maurice', 'Frances',
    'Cecilia', 'Amani', 'Shea', 'Bryan', 'Maryjane', 'Cullen', 'Juliana', 'Fisher', 'Dax', 'Coleman',
    'Matthew', 'Jaron', 'Danika', 'Deven', 'Amiah', 'Malik', 'Janelle', 'Adolfo', 'Braylen', 'Kyle',
    'Caroline', 'Sasha', 'Maddison', 'Donte', 'Kadence', 'Marcel', 'Billy', 'Krish', 'Addison', 'Lillian',
    'Cierra', 'Scarlett', 'Lewis', 'Tristin', 'Mila', 'Hudson', 'Audrey', 'Adelaide', 'Payten', 'Rihanna',
    'Nikhil', 'Maverick', 'Tony', 'Javion', 'Maxim', 'Anton', 'Myla', 'Grace', 'Dominick', 'Paula',
    'Kate', 'Fiona', 'Edith', 'Kylie', 'Jaylah', 'Demetrius', 'Madeline', 'Payton', 'Alden', 'Mayra',
    'Ezequiel', 'Caleb', 'Kyler', 'Isaias', 'Keegan', 'Kelton', 'Hunter', 'Logan', 'Luca', 'Jamar',
    'Jensen', 'Bailey', 'Luciana', 'Wendy', 'Zachary', 'Adrianna', 'Nathaly', 'Destiney', 'Lucille', 'Marquise',
    'Rayna', 'Lilian', 'Shayla', 'Colt', 'Rhianna', 'Shaun', 'Dean', 'Bella', 'Gabriela', 'Paul',
    'Julissa', 'Makayla', 'Aaliyah', 'Mathias', 'Jean', 'Elliot', 'Joey', 'Regan', 'Trey', 'Edgar',
    'Jocelynn', 'Kristina', 'Mitchell', 'Alondra', 'Janae', 'Kaeden', 'Jesus', 'Danielle', 'Madalynn', 'Miley',
    'Madisyn', 'Brenton', 'Lorelai', 'Elsie', 'Shaniya', 'Casey', 'Matilda', 'Leon', 'Shyanne', 'Cole',
    'Zechariah', 'Malachi', 'Annabel', 'Mercedes', 'Leonard', 'Iliana', 'Annalise', 'Kaylah', 'Lukas', 'Braxton',
    'Alisson', 'Lilliana', 'Mohamed', 'Jayson', 'Jaxson', 'Adelyn', 'Addison', 'Makena', 'Greyson', 'Rhys'];

export function RandomUser() {
    return {
        firstname: fakeUsers[Math.floor(Math.random() * fakeUsers.length)],
        gender: Math.random() < 0.5
    };
}
