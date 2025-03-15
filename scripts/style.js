import { StyleSheet } from 'react-native';

const primaryColor = "#03bd61";
const secondaryColor = "#f7dc82";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: 41,
        paddingBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        // paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    header__right: {
        flexDirection: 'row',
    },
    appName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    subText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        lineHeight: 22,
    },
    searchIcon: {
        marginRight: 8,
    },

    // GENERAL
    h1: {
        fontSize: 32,
        fontWeight: 'bold'

    },

    h2: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8
    },

    h3: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    bold: {
        fontWeight: 'bold'
    },

    textCenter: {
        textAlign: 'center'
    },

    primaryColor: {
        color: primaryColor,
    },

    shadow: {
        shadowColor: "black",
        elevation: 4,
    },

    hidden: {
        display: "none"
    },

    table: {
        justifyContent: 'center',
        flexDirection: "row",
        marginTop: 24
    },

    col: {
        marginEnd: 8
    },

    row: {
        paddingVertical: 6
    },

    col_last: {
        marginEnd: 0
    },

    link: {
        textDecorationLine: "underline"
    },

    link_green: {
        color: "green"
    },

    link_red: {
        color: "red"
    },

    link_blue: {
        color: "blue"
    },

    inputContainer: {
        width: '100%',
        marginBottom: 16
    },
    inputParent: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        paddingHorizontal: 12,
        height: 46,
    },
    inputText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        height: '100%',
    },

    formText: {
        opacity: 0.5,
        fontSize: 10
    },

    m0: {
        marginTop:0,
        marginRight:0,
        marginBottom:0,
        marginLeft:0,
        margin:0,
    },

    mb1: {
        marginBottom: 8
    },

    mb2: {
        marginBottom: 12
    },

    mb3: {
        marginBottom: 16
    },

    mr1: {
        marginRight: 8
    },

    mr2: {
        marginRight: 12
    },

    mr3: {
        marginRight: 16
    },

    card: {
        backgroundColor: "white",
        borderRadius: 5,
        overflow: "hidden"
    },

    cardHead: {
        backgroundColor: "whitesmoke"
    },

    cardBody: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    muted: {
        opacity: 0.5,
    },

    ul: {
        paddingStart: 16,
        marginBottom: 8
    },

    // CONTENT
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 16,
        alignItems: 'center',
    },

    content_index: {
        // justifyContent: 'center',
    },

    content_notif: {
        backgroundColor: "whitesmoke",
    },

    content_liked: {
        width: "100%",
        alignItems: 'stretch',
        backgroundColor: "whitesmoke",
    },

    content_admin: {
        
    },

    content_profile: {
        alignItems: 'stretch',
        justifyContent: "center",
        paddingVertical: 32
    },

    content_content: {

    },


    // INDEX
    searchContainer: {
        width: "100%"
    },

    ressourceResult: {
        marginBottom: 16
    },

    ressourceResult__img: {
        height: 100,
        width: "100%",
        backgroundColor: "black",
    },

    searchFilters: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8
    },

    searchBtn: {
        marginEnd: 8
    },


    // NOTIF

    notif: {
        backgroundColor: 'white',
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        marginBottom: 8
    },

    notif__title: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    notif__desc: {

    },

    notif__link: {
        opacity: 0.3
    },



    // LIKED
    likedTab: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 8
    },
    
    
    likedTab__tab: {

    },
    
    
    likedTab__text: {
        opacity: 0.3,
        fontWeight: 'bold'
    },
    
    
    likedTab__text_active: {
        color: primaryColor,
        opacity: 1
    },

    likedTab__button: {
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    
    
    likedCategories: {

    },

    likedCat: {

    },

    likedArticle: {
        backgroundColor: 'white',
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        marginBottom: 8,
    },

    likedArticle__title: {

    },

    likedArticle__content: {

    },

    likedArticle__text: {
    },


    // ADMIN
    adminButtons: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    adminBtn: {
        marginEnd: 8,
    },

    // PROFILE
    profileTitle: {
        flexDirection: "row",
        alignItems: "center"
    },

    profileTexts: {
        marginBottom: 32
    },

    importantButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16
    },


    // CONTENT (Genre page content)
    content__header: {
        marginBottom: 16,
    },
    
    content__text: {
        marginBottom: 8
    },

    // BREATHING EXERCICE
    exParam__inputGroup: {
        marginBottom:8
    },
});