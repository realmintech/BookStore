const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks.length > 0) {
      res.status(200).json({
        success: true,
        message: "List of books fetched successfully",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books found in the collection",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const bookDetailsByID = await Book.findById(getCurrentBookID);

    if (!bookDetailsByID) {
      return res.status(404).json({
        success: false,
        message: "Book with the current ID is not found",
      });
    }

    res.status(200).json({
        success: true,
        data: bookDetailsByID
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
        success: false,
        message: "Something went wrong! Please try again"
    })
    
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body
    const newlyCreatedBook = await Book.create(newBookFormData)
    if(newBookFormData) {
      req.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      })
    }
  } catch (error) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again"
    })
  }
}

const updateBook = async (req, res) => {
  try {
    const updateBookData = req.body
    const getCurrentBookID = req.params.id
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookID,
      updateBookData,
      {
        new: true,
      }
    )

    if(!updateBook) {
      res.status(404).json({
        success: false,
        message: "Book is not found with the specified ID"
      })
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully"
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again"
    })
    
  }
}

const deleteBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id
    const getDeletedBook = await Book.findByIdAndDelete(getCurrentBookId)

    if(!deleteBook) {
      res.status(404).json({
        success: false,
        message: "Book is not found with this ID"
      })
    }

    res.status(200).json({
      success: true,
      data: getDeletedBook,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again"
    })
    
  }
}

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
