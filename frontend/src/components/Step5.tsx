import { Button } from "./Button.tsx";
import styles from "./Step5.module.css";

// Pass in Application's next function
export type StepProps = {
  next: () => void;
};

export const Step5: React.FC<StepProps> = ({ next }: StepProps) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    if (!form.checkValidity()) {
      return;
    }
    next();
  };

  return (
    <>
      <form id="step5-form" onSubmit={onSubmit}>
        <div className={styles.formContainer}>
          <hr />
          <div className={styles.formSection}>
            <p>
              To pay via <strong className={styles.red}> credit card</strong>: Navigate to the
              Payment Portal using the button below <br />
              <u>Please Note:</u> In the required “Invoice” field, please enter: IDEX – Candidates Name{" "}
              <br />
              <strong className={styles.red}> Mail checks </strong> to: CCIDC, Inc. – 365 W. Second
              Ave, Suite 221, Escondido, CA 92025
            </p>

            <br />

            <p className={styles.red}>
              Total Fees due with application (Includes Application Fee + IDEX Exam Fee + Testing
              Center Fee)**: <strong>$700 Total*</strong>
            </p>

            <br />

            <p>
              <span className={styles.red}>*</span>
              Fee is nonrefundable <br />
              <span className={styles.red}>**</span>
              Application fees must be submitted with application.
            </p>

            <br />

            <div className={styles.centerButton}>
              <Button onClick={undefined} additionalStyle={styles.paymentportalbutton}>
                Payment Portal
              </Button>
            </div>
          </div>

          <hr />
        </div>
      </form>
    </>
  );
};
