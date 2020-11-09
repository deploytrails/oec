import React, { useState, useEffect } from "react";


const ReferenceBooksTabData = ({ refBookData }) => {
 
  return (
    <React.Fragment>
      <br></br>
    {refBookData && refBookData.length?(
    <TABLE.TableWrapper>
          <TABLE.TableTR>
            <TABLE.TableTh>Sl. No.</TABLE.TableTh>
            <TABLE.TableTh>Book Name</TABLE.TableTh>
            <TABLE.TableTh>Author</TABLE.TableTh>
            <TABLE.TableTh>	Preffered Units</TABLE.TableTh>

          </TABLE.TableTR>
          {refBookData &&
            refBookData.length &&
            refBookData.map((book, i) => (
              <TABLE.TableTbody key={book[i]}>
                <TABLE.TableTRR
                >
                  <TABLE.TableTdd>{book[i]}</TABLE.TableTdd>
                  <TABLE.TableTdd>{book[i]}</TABLE.TableTdd>
                  <TABLE.TableTdd>{book[i]}</TABLE.TableTdd>
                  <TABLE.TableTdd>{book[i]}</TABLE.TableTdd>
                </TABLE.TableTRR>
              </TABLE.TableTbody>
            ))}
        </TABLE.TableWrapper>
    ):( <div>Reference Books Not Defined!</div>)}
      
    </React.Fragment>
  );
};

export default ReferenceBooksTabData;
