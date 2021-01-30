import React, { useState, useEffect } from "react";
import * as TABLE from "../../../components/dashboards/styles/table.styles";

const ReferenceBooksTabData = ({ refBookData }) => {
  return (
    <React.Fragment>
      <br></br>
      {refBookData && refBookData.length ? (
        <TABLE.TableWrapper>
          <TABLE.TableTR>
            <TABLE.TableTh>Sl. No.</TABLE.TableTh>
            <TABLE.TableTh>Book Name</TABLE.TableTh>
            <TABLE.TableTh>Author</TABLE.TableTh>
            <TABLE.TableTh> Preferred Units</TABLE.TableTh>
          </TABLE.TableTR>
          {refBookData &&
            refBookData.length &&
            refBookData.map((book, i) => (
              <TABLE.TableTbody key={book.courseRefBookId}>
                <TABLE.TableTRR>
                  <TABLE.TableTdd>{i + 1}</TABLE.TableTdd>
                  <TABLE.TableTdd>{book.bookName}</TABLE.TableTdd>
                  <TABLE.TableTdd>{book.author}</TABLE.TableTdd>
                  <TABLE.TableTdd>{book.unitsSelected}</TABLE.TableTdd>
                </TABLE.TableTRR>
              </TABLE.TableTbody>
            ))}
        </TABLE.TableWrapper>
      ) : (
        <div>Reference Books Not Defined!</div>
      )}
    </React.Fragment>
  );
};

export default ReferenceBooksTabData;
