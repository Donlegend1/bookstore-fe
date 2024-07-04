import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchBooks } from '../../redux/actions/bookActions';

const BookList: React.FC = () => {
  const dispatch = useDispatch();
    const books = [
        {
            id: 1,
            title: "books",
          author:"Shake spare"
      }
  ]

  useEffect(() => {
    // dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="row">
                {/* Progress Table start */}
                <div className="col-12 mt-4">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card_title">Recent Books</h4>
                        <div className="single-table">
                        <div className="table-responsive">
                            <table className="table table-hover progress-table text-center">
                            <thead className="text-uppercase">
                                <tr>
                                <th scope="col">S/N</th>
                                <th scope="col">Book name</th>
                                <th scope="col">Autho</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Price</th>
                                <th scope="col">status</th>
                                <th scope="col">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">6583</th>
                                <td>Mark Spence</td>
                                <td>Macbook Pro</td>
                                <td>09 / 07 / 2018</td>
                                <td>672.56$</td>
                                <td><span className="badge badge-primary">Progress</span></td>
                                <td>
                                    <ul className="d-flex justify-content-center">
                                    <li className="mr-3"><button type="button" className="btn btn-inverse-primary"><i className="fa fa-edit" /></button></li>
                                    <li><button type="button" className="btn btn-inverse-danger"><i className="ti-trash" /></button></li>
                                    </ul>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">4652</th>
                                <td>David Rebon</td>
                                <td>iPhone X</td>
                                <td>09 / 07 / 2018</td>
                                <td>672.56$</td>
                                <td><span className="badge badge-warning">Pending</span></td>
                                <td>
                                    <ul className="d-flex justify-content-center">
                                    <li className="mr-3"><button type="button" className="btn btn-inverse-primary"><i className="fa fa-edit" /></button></li>
                                    <li><button type="button" className="btn btn-inverse-danger"><i className="ti-trash" /></button></li>
                                    </ul>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">7292</th>
                                <td>Jhon Doe</td>
                                <td>Samsung</td>
                                <td>09 / 07 / 2018</td>
                                <td>672.56$</td>
                                <td><span className="badge badge-success">Completed</span></td>
                                <td>
                                    <ul className="d-flex justify-content-center">
                                    <li className="mr-3"><button type="button" className="btn btn-inverse-primary"><i className="fa fa-edit" /></button></li>
                                    <li><button type="button" className="btn btn-inverse-danger"><i className="ti-trash" /></button></li>
                                    </ul>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">7826</th>
                                <td>Jessica Roy</td>
                                <td>Exercise Machine</td>
                                <td>09 / 07 / 2018</td>
                                <td>672.56$</td>
                                <td><span className="badge badge-danger">Stopped</span></td>
                                <td>
                                    <ul className="d-flex justify-content-center">
                                    <li className="mr-3"><button type="button" className="btn btn-inverse-primary"><i className="fa fa-edit" /></button></li>
                                    <li><button type="button" className="btn btn-inverse-danger"><i className="ti-trash" /></button></li>
                                    </ul>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">2638</th>
                                <td>Malika Jhon</td>
                                <td>Machine</td>
                                <td>09 / 07 / 2018</td>
                                <td>483.56$</td>
                                <td><span className="badge badge-primary">Progress</span></td>
                                <td>
                                    <ul className="d-flex justify-content-center">
                                    <li className="mr-3"><button type="button" className="btn btn-inverse-primary"><i className="fa fa-edit" /></button></li>
                                    <li><button type="button" className="btn btn-inverse-danger"><i className="ti-trash" /></button></li>
                                    </ul>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">9374</th>
                                <td>David Jess</td>
                                <td>Laptop</td>
                                <td>09 / 07 / 2018</td>
                                <td>473.56$</td>
                                <td><span className="badge badge-success">Completed</span></td>
                                <td>
                                    <ul className="d-flex justify-content-center">
                                    <li className="mr-3"><button type="button" className="btn btn-inverse-primary"><i className="fa fa-edit" /></button></li>
                                    <li><button type="button" className="btn btn-inverse-danger"><i className="ti-trash" /></button></li>
                                    </ul>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Progress Table end */}
                </div>
  );
};

export default BookList;
