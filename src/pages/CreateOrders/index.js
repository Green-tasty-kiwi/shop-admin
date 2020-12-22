import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button, Typography, Grid, TextField } from '@material-ui/core';
import OrderCustomerForm from './OrderCustomerForm';
import StickyHeadTable from '../../components/common/Table';
import OrderProducts from './OrderProducts';
import { CustomerInfo } from './CustomerInfo';
import { BreadCrumbs } from "../../components/common/Breadcrumbs";
import { gateways } from '../../gateways';
import { useHistory } from 'react-router-dom';

function getSteps() {
    return ['Customer information', 'Products order', 'Total'];
}



export default function CreateOrders() {
    const history = useHistory();
    const noPagination = true;
    const [totalSum, setTotalSum] = useState()
    const [page, setPage] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState();
    const [phone, setPhone] = useState();
    const [orderCustomer, setOrderCustomer] = useState({
        firstName: 'Jhon',
        lastName: 'Smith',
        city: 'Kiev',
        address: 'Krasnova',
        house: '56',
        appartment: '35'
    });
    const [orderProducts, setOrderProducts] = useState([]);
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const steps = getSteps();
    

    const updateTable = ({ page, rowsPerPage }) => {
        setPage(page);
        setPerPage(rowsPerPage)
    }

    useEffect(() => {
        gateways.productsGateway.findAll({ page, perPage }).then((products) => {
            const { count, rows } = products;
            setProducts(rows);
            setTotal(count)
        });
    }, [page, perPage])

    useEffect(() => {
        const existCustomer = gateways.customersGateway.findOne({ phone })
            .then((existCustomer) => {
                existCustomer && setOrderCustomer(existCustomer)
            })
    }, [phone])
    
    useEffect(() => {
        setTotalSum(
            orderProducts.reduce(function(sum, current) {
            
                sum += current.price;
                return sum
            }, 0)
            )
    }, [orderProducts])

    const handleChange = (event) => {
        setPhone({ [event.target.phone]: event.target.value });
        setOrderCustomer({ ...orderCustomer, [event.target.name]: event.target.value })
    };

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleRemoveProducts = (id) => {
        setOrderProducts(orderProducts.filter(orderProduct => orderProduct.id !== id))
    }

    const handleFinish = async (event) => {
        event.preventDefault()
        try {
            const formData = new FormData();

            formData.set('phone', orderCustomer.phone);
            formData.set('firstName', orderCustomer.firstName);
            formData.set('lastName', orderCustomer.lastName);
            formData.set('city', orderCustomer.city);
            formData.set('address', orderCustomer.address);
            formData.set('house', orderCustomer.house);
            formData.set('appartment', orderCustomer.appartment);

            const productsId = [];

            for (let orderProduct of orderProducts) {
                productsId.push(orderProduct.id)
            }

            formData.set('productsId', productsId);

            await gateways.ordersGateway.create(formData)
            history.push('/orders');
        } catch (error) {
            console.error(error)
        }
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <OrderCustomerForm
                        phone={orderCustomer.phone}
                        firstName={orderCustomer.firstName}
                        lastName={orderCustomer.lastName}
                        city={orderCustomer.city}
                        address={orderCustomer.address}
                        house={orderCustomer.house}
                        appartment={orderCustomer.appartment}
                        handleChange={handleChange}

                    />
                );
            case 1:
                return (
                    <Grid container direction="column" spacing={2}>

                        <Grid item>
                            <h2 className={classes.h2}>Ordered Products</h2>

                            <StickyHeadTable

                                noPagination={noPagination}

                                updateTable={updateTable}
                                rows={orderProducts}

                                headers={[
                                    { label: 'Image' },
                                    { label: 'Name' },
                                    { label: 'Status' },
                                    { label: 'Price' },
                                    { label: 'Quantity' },
                                ]}

                                columns={[
                                    {
                                        key: 'image',
                                        format: (value) => {
                                            return <img height={32} src={value} alt='ups!' />
                                        }
                                    },
                                    { key: 'name' },
                                    { key: 'status' },
                                    { key: 'price' },
                                    { key: 'quantity' },
                                ]}

                                menuItems={[{ label: 'Delete', onClick: handleRemoveProducts },]}
                            />
                        </Grid>

                        <Grid item>
                            <h2 className={classes.h2}>Products List</h2>

                            <OrderProducts

                                updateTable={updateTable}

                                total={total}

                                orderProducts={orderProducts}
                                products={products}
                                handleAddProduct={(id) => {

                                    if (!orderProducts.find(orderProduct => orderProduct.id === id)) {
                                        setOrderProducts([
                                            ...orderProducts,
                                            products.find(product => product.id === id)
                                        ]);
                                    }
                                }}
                                handleRemoveProduct={handleRemoveProducts}
                            />
                        </Grid>

                    </Grid>
                );
            case 2:
                return (

                    <Grid container direction="column" spacing={2}>

                        <CustomerInfo orderCustomer={orderCustomer} />

                        <Grid item>
                            <h2>Customer order</h2>

                            <StickyHeadTable

                                noPagination={noPagination}

                                rows={orderProducts}

                                headers={[
                                    { label: 'Image' },
                                    { label: 'Name' },
                                    { label: 'Status' },
                                    { label: 'Price' },
                                    { label: 'Quantity' },
                                ]}

                                columns={[
                                    {
                                        key: 'image',
                                        format: (value) => {
                                            return <img height={32} src={value} alt='ups!' />
                                        }
                                    },
                                    { key: 'name' },
                                    { key: 'status' },
                                    { key: 'price' },
                                    { key: 'quantity' },
                                ]}
                            />
                        </Grid>

                        <Grid container className={classes.total}>
                            <Grid item xs={9}/>
                        <Grid item xs={3}>
                        <TextField 
                        name="totalSum"
                        label="Total sum"
                        defaultValue={totalSum}
                        variant="outlined" 
                        InputProps={{
                            readOnly: true,
                        }}
                        />
                        </Grid>
                        </Grid>

                    </Grid >
                );
            default:
                return 'Unknown step';
        }
    }

    return (
        <div>
            <BreadCrumbs
                items={[{
                    link: '/orders',
                    label: 'Orders'
                },
                {
                    label: 'Order create'
                }]}
            />

            <div className={classes.root}>

                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = <Typography variant="caption"></Typography>;
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Button onClick={handleReset} className={classes.button}>
                                Reset
                            </Button>
                        </div>
                    ) : (
                            <div>
                                {getStepContent(activeStep)}

                                <div>
                                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                        Back
                                    </Button>
                                    {isStepOptional(activeStep) && (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleSkip}
                                            className={classes.button}
                                        >
                                            Skip
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        color="primary"

                                        onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
        marginTop: '15px'
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    h2: {
        textAlign: 'center'
    },
    total: {
        marginTop: '15px'
    }
}));