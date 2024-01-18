import UseBooksDetails from "../../Hooks/UseBooksDetails/UseBooksDetails";

const BooksDetails = () => {
    const [booksInfo]=UseBooksDetails()
    console.log(booksInfo)
    return (
        <div>
            details
        </div>
    );
};

export default BooksDetails;