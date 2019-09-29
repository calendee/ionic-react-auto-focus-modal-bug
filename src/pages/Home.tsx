import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButtons,
  IonIcon,
} from "@ionic/react";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [showBadModal, setShowBadModal] = useState(false);
  const [showGoodModal, setShowGoodModal] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Modal Issue</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ionicframework.com/docs/"
          >
            docs
          </a>{" "}
          will be your guide.
        </p>
        <IonButton onClick={() => setShowGoodModal(true)}>
          Show Good Modal
        </IonButton>
        <IonButton onClick={() => setShowBadModal(true)}>
          Show Bad Modal
        </IonButton>
        {/* MODALS WITHOUT AUTOFOCUS DO NOT SCROLL OUT OF VIEW ON MOBILE */}
        <IonModal
          isOpen={showGoodModal}
          onDidDismiss={() => setShowGoodModal(false)}
        >
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="secondary">
                <IonButton onClick={() => setShowGoodModal(false)}>
                  <IonIcon slot="icon-only" name="close" />
                </IonButton>
              </IonButtons>
              <IonTitle>Good Modal</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            <form
              noValidate
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              <IonList>
                <IonItem>
                  <IonLabel>Email</IonLabel>
                  <IonInput
                    // NO AUTOFOCUS
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    type="email"
                    value=""
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel>Password</IonLabel>
                  <IonInput
                    autocomplete="off"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    value=""
                  ></IonInput>
                </IonItem>
              </IonList>
              <IonButton
                className="ion-padding"
                color="primary"
                expand="block"
                type="submit"
                onClick={() => setShowGoodModal(false)}
              >
                Login
              </IonButton>
            </form>
          </IonContent>
        </IonModal>
        {/* MODALS WITH AUTOFOCUS SCROLL OUT OF VIEW ON MOBILE */}
        <IonModal
          isOpen={showBadModal}
          onDidDismiss={() => setShowBadModal(false)}
        >
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="secondary">
                <IonButton onClick={() => setShowBadModal(false)}>
                  <IonIcon slot="icon-only" name="close" />
                </IonButton>
              </IonButtons>
              <IonTitle>Bad Modal</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            <form
              noValidate
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              <IonList>
                <IonItem>
                  <IonLabel>Email</IonLabel>
                  <IonInput
                    // AUTO FOCUS CAUSES MODAL TO SCROLL OUT OF VIEW
                    autofocus={true}
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    type="email"
                    value=""
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel>Password</IonLabel>
                  <IonInput
                    autocomplete="off"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    value=""
                  ></IonInput>
                </IonItem>
              </IonList>
              <IonButton
                className="ion-padding"
                color="primary"
                expand="block"
                type="submit"
                onClick={() => setShowBadModal(false)}
              >
                Login
              </IonButton>
            </form>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
