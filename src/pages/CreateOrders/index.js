import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@material-ui/core';
import OrderCustomerForm from './OrderCustomerForm';
import StickyHeadTable from '../../components/common/Table';
import OrderProducts from './OrderProducts';
import { BreadCrumbs } from "../../components/common/Breadcrumbs"



function getSteps() {
    return ['Customer information', 'Products order', 'Total'];
}

function handleFinish() {

}

const defaultProducts = [{ id: 1, name: 'product', img: '' }];

export default function CreateOrders({ products = defaultProducts }) {
    const [orderData, setOrderData] = React.useState({});
    const [orderProducts, setOrderProducts] = React.useState([]);
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

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
        setOrderProducts(products.filter(product => product.id !== id))
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <OrderCustomerForm
                        phone={orderData.phone}
                        first_name={orderData.first_name}
                        last_name={orderData.last_name}
                        city={orderData.city}
                        address={orderData.address}
                        house={orderData.house}
                        appartment={orderData.appartment}
                        handleChange={(event) => {
                            setOrderData({
                                ...orderData,
                                [event.target.name]: event.target.value
                            })
                        }}
                    />
                );
            case 1:
                return (
                    <Grid container direction="column" spacing={2}>

                        <Grid item>
                            <StickyHeadTable
                                rows={orderProducts}
                                headers={[{ label: 'Image' }, { label: 'Name' },]}
                                columns={[
                                    { key: 'name' },
                                    {
                                        key: 'img',
                                        format: (value) => {
                                            return <img height={32} src={value} alt='ups!' />
                                        }
                                    }
                                ]}
                            />
                        </Grid>

                        <Grid item>
                            <OrderProducts
                                orderProducts={orderProducts}
                                products={products}
                                handleAddProduct={(id) => {
                                    setOrderProducts([
                                        ...orderProducts,
                                        products.find(product => product.id === id)
                                    ])
                                }}
                                handleRemoveProduct={handleRemoveProducts}
                            />
                        </Grid>

                    </Grid>
                );
            case 2:
                return (
                    <Grid container direction="column" spacing={2}>

                        <Grid item>
                            <h2>Customer information</h2>

                            <TableContainer component={Paper}>
                                <Table aria-label="customized table">
                                    <TableBody>

                                        <TableRow >
                                            <TableCell style={{ width: '20%' }}>
                                                Phone number:
                                            </TableCell>
                                            <TableCell align="left">{orderData.phone}</TableCell>
                                        </TableRow>

                                        <TableRow >
                                            <TableCell>
                                                First Name:
                                            </TableCell>
                                            <TableCell align="left">{orderData.first_name}</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>
                                                Last Name:
                                            </TableCell>
                                            <TableCell align="left">{orderData.last_name}</TableCell>
                                        </TableRow>

                                        <TableRow >
                                            <TableCell>
                                                City:
                                            </TableCell>
                                            <TableCell align="left">{orderData.city}</TableCell>
                                        </TableRow>

                                        <TableRow >
                                            <TableCell>
                                                Address:
                                            </TableCell>
                                            <TableCell align="left">{orderData.address}</TableCell>
                                        </TableRow>

                                        <TableRow >
                                            <TableCell>
                                                House:
                                            </TableCell>
                                            <TableCell align="left">{orderData.house}</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>
                                                Appartment:
                                            </TableCell>
                                            <TableCell align="left">{orderData.appartment}</TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>

                        <Grid item>
                            <h2>Customer order</h2>

                            <StickyHeadTable
                                rows={orderProducts}
                                headers={[{ label: 'Image' }, { label: 'Name' },]}
                                columns={[
                                    { key: 'name' },
                                    {
                                        key: 'img',
                                        format: (value) => {
                                            return <img height={32} src={value} alt='ups!' />
                                        }
                                    }
                                ]}
                            />
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
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>

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
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }
}));