import React from 'react';
import './model-confirm.scss';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

const ConfirmInformation = (props: any) => {
    const { title, accountSelected, onYes, onNo, amount, bankAmount } = props;
    return (
        <Modal show={true} onHide={onNo} keyboard={false} dialogClassName='modal-dialog modal-sm' centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='table-model'>
                    <table>
                        <tbody>
                            <tr>
                                <td>Source Account</td>
                                <td>Free Checking 4692</td>
                            </tr>
                            <tr>
                                <td>Balance</td>
                                <td>${bankAmount}</td>
                            </tr>
                            <tr>
                                <td>To Account</td>
                                <td>{accountSelected?.merchant?.name}</td>
                            </tr>
                            <tr>
                                <td>Amount</td>
                                <td>${amount}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={onNo}>
                    Cancel
                </Button>
                <Button type='submit' variant='primary' onClick={onYes}>
                    Transfer
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

ConfirmInformation.propTypes = {
    onYes: PropTypes.func.isRequired,
    onNo: PropTypes.func.isRequired,
    accountSelected: PropTypes.object.isRequired,
    title: PropTypes.string,
    amount: PropTypes.string,
    bankAmount: PropTypes.number,
};

export default ConfirmInformation;
