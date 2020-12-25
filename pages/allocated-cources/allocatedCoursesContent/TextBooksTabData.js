import React from "react";
import * as TABLE from "../../../components/dashboards/styles/table.styles";

const TextBooksTabData = ({ forBookTable }) => {
  return (
    <React.Fragment>
      <br></br>
      {forBookTable && forBookTable.length ? (
        <TABLE.TableWrapper>
          <TABLE.TableTR>
            <TABLE.TableTh>Sl. No.</TABLE.TableTh>
            <TABLE.TableTh>Course Text Book Name</TABLE.TableTh>
            <TABLE.TableTh>Author</TABLE.TableTh>
          </TABLE.TableTR>
          {forBookTable &&
            forBookTable.length &&
            forBookTable.map((book, i) => (
              <TABLE.TableTbody key={book.courseBookId}>
                <TABLE.TableTRR>
                  <TABLE.TableTdd>{i + 1}</TABLE.TableTdd>
                  <TABLE.TableTdd>{book.bookName}</TABLE.TableTdd>
                  <TABLE.TableTdd>{book.author}</TABLE.TableTdd>
                </TABLE.TableTRR>
              </TABLE.TableTbody>
            ))}
        </TABLE.TableWrapper>
      ) : (
        <div>Books Not Defined!</div>
      )}
    </React.Fragment>
  );
};

export default TextBooksTabData;
