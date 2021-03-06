define([], function () {
  'use strict';

  return {
    es: {
      all: 'Todos',
      contacts: 'Contactos',
      noContacts: 'No tiene contactos',
      jan: 'Ene',
      feb: 'Feb',
      mar: 'Mar',
      apr: 'Abr',
      may: 'May',
      jun: 'Jun',
      jul: 'Jul',
      aug: 'Ago',
      sep: 'Sep',
      oct: 'Oct',
      nov: 'Nov',
      dic: 'Dic',
      offline: 'desconectado',
      online: 'conectado',
      connecting: 'conectando',
      oldAppAlert: 'Esta versión no está soportada. Por favor, actualícela ' +
      'en el Firefox Marketplace para disfrutar de la nueva funcionalidad.',
      selectCountryAlert: 'Por favor, seleccione un país.',
      movilNumberValidationAlert: 'El número de móvil:\n' +
      '+{{prefix}} {{number}}\nno parece un número de {{country}} válido.\n ' +
      '¿Quieres seguir de todas formas?',
      registerErrorObjectAlert: 'Se ha producido un error al registrar su ' +
      'número de móvil.\n Por favor, compruebe su conectividad.',
      registerError429Alert: 'Se ha producido un error al registrar su ' +
      'número de móvil.\n Por favor, contacte con el servicio de asistencia.',
      registerErrorGenericAlert: 'Se ha producido un error al registrar su ' +
      'número de móvil.\n Por favor, reinténtelo más tarde.',
      registerErrorTooRecent: 'Es demasiado pronto para solicitar otro código' +
      ' de registro. Comprueba que no te ha llegado el mensaje de ' +
      'confirmación. Si es así, espera un poco o vuelve a intentar registrar ' +
      'tu número pasados {{minutes}} minutos',
      pinInvalidAlert: 'PIN no válido.',
      screenNameAlert: 'Su nombre de pantalla no puede estar vacío.',
      inbox: 'Chats',
      noConversation: 'No hay conversaciones.',
      selectContacts: 'Escoja contactos de la lista de contactos de OpenWapp ' +
      'para comenzar a chatear.',
      removeGroupConversation: '¿Quiere abandonar el grupo {{groupTitle}} y ' +
      'eliminar la conversación?',
      remove1to1Conversation: '¿Quiere eliminar la conversación con {{who}}?',
      removeMessage: '¿Quiere eliminar este mensaje?',
      today: 'Hoy',
      yesterday: 'Ayer',
      before: 'Anterior',
      settings: 'Más',
      profile: 'Perfil',
      profileExplanation: 'Desde aquí puede establecer su nombre, estado y ' +
      'foto de contacto:',
      openWapp: 'OpenWapp',
      loading: 'Cargando…',
      loadingConversations: 'Cargando conversaciones…',
      registerOpenWapp: 'Registro en OpenWapp',
      welcomeMessage1: 'Bienvenido a OpenWapp.',
      welcomeMessage2: 'Registrarse es muy fácil y rápido.',
      insertMobileNumber: 'Por favor, introduzca su número de móvil',
      countryDetectedOnLogin: 'Tiene un teléfono de {{country}}. Si no es ' +
      'correcto, cámbielo en el selector.',
      countryNotDetectedOnLogin: 'Por favor, elija su país para continuar',
      country: 'País',
      yourNumberPlaceHolder: 'Su número',
      nextButton: 'Siguiente',
      backButton: 'Atrás',
      reEnterPhone: 'Registrar otro teléfono',
      goToValidateButton: '¡Ya tengo el código!',
      smsValMessage: 'Gracias, ahora vamos a tratar de validar su número de ' +
      'teléfono:',
      codePlaceholder: 'Código',
      sendingValCode: 'Validando número…',
      loginEditIncorrect: 'Pulse para editar si su número no es correcto.',
      loginNumberOk: 'Pulse Aceptar si el número es correcto.',
      acceptButton: 'Aceptar',
      name: 'Nombre',
      settingsGeneral: 'General',
      settingsAbout: 'Acerca de',
      settingsVersion: 'Versión',
      logout: 'Cerrar sesión',
      validateCode: 'Por favor, introduzca el código que ha recibido por ' +
      'SMS al',
      validateCodeProgress: 'Verificando código…',
      validateCodeCall: 'Llamar con el código',
      settingAccount: 'Configurando la cuenta…',
      pictureDescription: 'Elija la imagen para mostrar como foto de contacto',
      screenNamePlaceHolder: 'Su nombre',
      screenNameDescription: 'Esto aparecerá como su nombre de contacto',
      statusPlaceHolder: 'Me siento…',
      statusDescription: 'Esto aparecerá como su estado de contacto',
      doneButton: 'Hecho',
      pending: 'pendiente',
      sent: 'enviado',
      unsent: 'sin enviar',
      defaultImageCaption: 'Imagen sin título',
      received: 'recibido',
      composeImageCaptionPlaceholder: 'Añadir título',
      sendButton: 'Enviar',
      loadImageError: 'No se puede cargar la imagen ahora, vuelva a ' +
      'intentarlo más tarde.',
      sendingImage: 'Enviando',
      audioMessageSent: 'Audio enviado',
      audioMessageReceived: 'Audio recibido',
      loadAudioError: 'No se puede cargar el archivo ahora.' +
      '\n Vuelva a intentarlo más tarde.',
      sendLocation: 'Enviar ubicación',
      loadLocationError: 'Lo sentimos. No se puede cargar la ubicación ' +
      'ahora. \n Por favor, vuelva a intentarlo más tarde.',
      retrievingLocation: 'Cargando ubicación…',
      cancelButton: 'Cancelar',
      currentLocation: 'Mi ubicación',
      logoutAlertText: 'Utilice esta opción sólo si desea eliminar OpenWapp ' +
      'de este dispositivo para iniciar sesión en OpenWapp desde otro ' +
      'dispositivo. Para desconectarse, simplemente salga de OpenWapp ' +
      'y quedará inactivo automáticamente.',
      savePicture: 'Guardar',
      sdCardUnavailable: 'La tarjeta de memoria SD no está disponible',
      pictureSavePrompt: '¿Quieres guardar la foto en la Galería?',
      pictureSaveInfo: 'Guardada',
      pictureSaveError: 'Se ha producido un error guardando la foto',
      migrationHeader: 'Actualización de OpenWapp',
      migrationBody: 'OpenWapp está finalizando la actualización a la nueva ' +
      'version',
      migrationPleaseWait: 'Espere por favor',
      conversationLastSeen: 'Visto por última vez:',
      conversationIsOnline: 'Disponible',
      loadingParticipants: 'Cargando contactos…',
      invite: 'Invitar a WhatsApp',
      tellAFriendText: 'Consigue WhatsApp Messenger para Android, iPhone, ' +
      'Nokia, BlackBerry, Windows Phone y ahora también para Firefox OS! ' +
      'Descárgalo hoy de http://whatsapp.com/dl/',
      emojiListTitle: 'Escoja un emoji para enviar',
      contactProfile: 'Perfil del contacto',
      newGroup: 'Nuevo grupo',
      groupProfile: 'Info del grupo',
      leaveGroup: 'Abandonar grupo',
      groupPictureDescription: 'Elija la imagen del grupo',
      subjectPlaceHolder: 'Este grupo trata de…',
      subjectDescription: 'Indique brevemente de qué trata el grupo',
      participants: 'Participantes',
      unknownParticipant: 'Participante desconocido',
      participantsDescription: 'Elija los participantes para este grupo',
      addParticipant: 'Añadir participante',
      removeParticipant: 'Eliminar participante',
      image: 'Imagen',
      video: 'Video',
      audio: 'Audio',
      notificationSubjectChanged: '{{who}} cambió el tema del grupo a:\n' +
                                  '{{subject}}',
      notificationSubjectChangedByYou: 'Cambiaste el tema del grupo a:\n' +
                                       '{{subject}}',
      notificationGroupParticipantAdded: '{{who}} se unió al grupo',
      notificationGroupParticipantRemoved: '{{who}} abandonó el grupo',
      notificationGroupPictureUpdated: '{{who}} cambió la foto del grupo',
      notificationGroupPictureUpdatedByYou: 'Cambiaste la foto del grupo',
      notificationGroupPictureRemoved: '{{who}} eliminó la foto del grupo',
      notificationGroupPictureRemovedByYou: 'Eliminaste la foto del grupo',
      notificationReportTitle: 'Tienes {{count}} mensajes sin leer.',
      notificationReportBody: 'De {{count}} conversaciones.',
      inAppNotification: '{{title}}: {{body}}',
      wakeUpTime: 'Comprobar nuevos mensajes…',
      wakeUpDescription: 'Periodos más cortos consumen más batería.',
      eachMinute: 'Cada minuto',
      each5Minutes: 'Cada 5 minutos',
      each10Minutes: 'Cada 10 minutos',
      each20Minutes: 'Cada 20 minutos',
      each30Minutes: 'Cada 30 minutos',
      eachHour: 'Cada hora',
      disabled: 'No comprobar',
      termsOfUse: 'Términos y condiciones',
      fileTooLargeToBeSent: 'El archivo es demasiado grande. El límite para ' +
                            'enviar archivos es de 10MiB.',
      errorAddingParticipant: 'No se puede añadir este contacto al grupo',
      genericConnectionProblem: 'Hubo un error inesperado. ¿Estás seguro de ' +
            'que tienes red? Prueba a reiniciar OpenWapp y si sigue ' +
            'ocurriendo, intenta la operación más tarde',
      participatingInTooMuchGroups: 'Estás participando en demasiados grupos.' +
            ' El límite es 50. Por favor, abandona uno antes de crear otro',
      accountExpired: 'Su cuenta ha caducado. ¿Desea actualizar su cuenta?',
      accountExpiration: 'Fecha de expiración',
      upgradeNow: 'Actualizar ahora',
      notSquarePicture: 'La imagen seleccionada no es cuadrada. Esto hará que' +
      ' aparezcan bandas de relleno alrededor. Si quieres arreglarlo, ' +
      'abre la aplicación de Galería y edita y recorta la imagen para que ' +
      'tenga un aspecto 1:1'
    },
    'en-US': {
      all: 'All',
      contacts: 'Contacts',
      noContacts: 'You have no contacts',
      jan: 'Jan',
      feb: 'Feb',
      mar: 'Mar',
      apr: 'Apr',
      may: 'May',
      jun: 'Jun',
      jul: 'Jul',
      aug: 'Aug',
      sep: 'Sep',
      oct: 'Oct',
      nov: 'Nov',
      dic: 'Dec',
      offline: 'offline',
      online: 'online',
      connecting: 'connecting',
      oldAppAlert: 'This version is not supported. Please update it ' +
      'from the Firefox Marketplace to enjoy new functionality.',
      selectCountryAlert: 'Please select a country.',
      movilNumberValidationAlert: 'The mobile number:\n' +
      '+{{prefix}} {{number}}\ndoes not seem a valid number from ' +
      '{{country}}.\nDo you want to continue in any case?',
      registerErrorObjectAlert: 'There was an error registering ' +
      'your number.\n Please check your connectivity settings.',
      registerError429Alert: 'There was an error registering your number.\n' +
      ' Please contact technical support.',
      registerErrorGenericAlert: 'There was an error registering your number.' +
      ' \n Please try again later.',
      registerErrorTooRecent: 'It is too early to request another ' +
      'registration code.\nCheck that you have not received the confirmation ' +
      'message. If so, wait a little bit or try to register in {{minutes}} ' +
      'minutes',
      pinInvalidAlert: 'PIN not recognized. Please try again.',
      screenNameAlert: 'Please enter your name.',
      inbox: 'Inbox',
      noConversation: 'No conversations.',
      selectContacts: 'Pick a contact in the OpenWapp contact list to ' +
      'start chatting.',
      removeGroupConversation: 'Do you want to leave the group {{groupTitle}}' +
      ' and delete the conversation?',
      remove1to1Conversation: 'Do you want to delete the conversation ' +
      ' with {{who}}?',
      removeMessage: 'Do you want to remove this message?',
      today: 'Today',
      yesterday: 'Yesterday',
      before: 'Older',
      settings: 'Settings',
      profile: 'Profile',
      profileExplanation: 'Here you can set your contact name, status and ' +
      'contact picture:',
      openWapp: 'OpenWapp',
      loading: 'Loading…',
      loadingConversations: 'Loading conversations…',
      registerOpenWapp: 'OpenWapp Sign-up',
      welcomeMessage1: 'Welcome to OpenWapp.',
      welcomeMessage2: 'Registering is very quick and easy.',
      insertMobileNumber: 'Please enter your mobile number.',
      countryDetectedOnLogin: 'You have a {{country}} phone number. ' +
      'Change it if it is not correct',
      countryNotDetectedOnLogin: 'Please, select your country below',
      country: 'Country',
      yourNumberPlaceHolder: 'Mobile number',
      nextButton: 'Next',
      backButton: 'Back',
      reEnterPhone: 'Register another phone',
      goToValidateButton: 'I already have the code!',
      smsValMessage: 'Thanks, now we will try to validate your number:',
      codePlaceholder: 'PIN',
      sendingValCode: 'Validating number…',
      loginEditIncorrect: 'Tap to edit if your number is incorrect.',
      loginNumberOk: 'Press OK if your number is correct.',
      acceptButton: 'OK',
      name: 'Your name',
      settingsGeneral: 'General',
      settingsAbout: 'About',
      settingsVersion: 'Version',
      logout: 'Log out',
      validateCode: 'Please enter the PIN you received ' +
      'via SMS to',
      validateCodeProgress: 'Verifying code…',
      validateCodeCall: 'Call me with the code',
      settingAccount: 'Setting up your account…',
      pictureDescription: 'Choose an image to show as your contact\'s ' +
      'picture',
      screenNamePlaceHolder: 'Your name',
      screenNameDescription: 'This will appear as your contact name',
      statusPlaceHolder: 'I\'m feeling…',
      statusDescription: 'This will appear as your contact status',
      doneButton: 'Done',
      pending: 'pending',
      sent: 'sent',
      unsent: 'unsent',
      defaultImageCaption: 'Image',
      received: 'received',
      composeImageCaptionPlaceholder: 'Add a caption',
      sendButton: 'Send',
      loadImageError: 'The image can\'t be loaded at the moment.\n Please ' +
      'try again later.',
      sendingImage: 'Sending',
      audioMessageSent: 'Audio sent',
      audioMessageReceived: 'Audio received',
      loadAudioError: 'The file can\'t be loaded at the moment.\n Please ' +
      'try again later.',
      sendLocation: 'Send location',
      loadLocationError: 'The location can\'t be loaded at the moment.\n' +
      'Please try again later.',
      retrievingLocation: 'Retrieving location…',
      cancelButton: 'Cancel',
      currentLocation: 'My current location',
      logoutAlertText: 'Use this option only if you want to clear OpenWapp ' +
      'from this device to log into OpenWapp on a different device. ' +
      'To go offline, simply switch away from OpenWapp and ' +
      'it will go to sleep automatically.',
      savePicture: 'Save',
      sdCardUnavailable: 'Memory card is not available.',
      pictureSavePrompt: 'Do you want to save this photo to the Gallery?',
      pictureSaveInfo: 'Saved',
      pictureSaveError: 'There was an error while saving the photo.',
      migrationHeader: 'OpenWapp update',
      migrationBody: 'OpenWapp is finishing updating to the new version.',
      migrationPleaseWait: 'Please wait',
      conversationLastSeen: 'Last seen:',
      conversationIsOnline: 'Online',
      loadingParticipants: 'Loading contacts…',
      invite: 'Invite to WhatsApp',
      tellAFriendText: 'Check out WhatsApp Messenger for Android, iPhone, ' +
      'Nokia, BlackBerry, Windows Phone and now Firefox OS! Download it ' +
      'today from http://whatsapp.com/dl/',
      emojiListTitle: 'Choose an emoji to send',
      contactProfile: 'Contact Profile',
      newGroup: 'New group',
      groupProfile: 'Group info',
      leaveGroup: 'Leave group',
      groupPictureDescription: 'Choose and image for the group',
      subjectPlaceHolder: 'This group is about…',
      subjectDescription: 'Briefly describe what is this group about',
      participants: 'Participants',
      unknownParticipant: 'Unknown participant',
      participantsDescription: 'Choose the participants of this group',
      addParticipant: 'Add participant',
      removeParticipant: 'Remove participant',
      image: 'Image',
      video: 'Video',
      audio: 'Audio',
      you: 'You',
      notificationSubjectChanged: '{{who}} changed the subject of the group ' +
                                  'to:\n{{subject}}',
      notificationSubjectChangedByYou: 'You changed the subject of the group ' +
                                       'to:\n{{subject}}',
      notificationGroupParticipantAdded: '{{who}} joined the group',
      notificationGroupParticipantRemoved: '{{who}} left the group',
      notificationGroupPictureUpdated: '{{who}} changed the group picture',
      notificationGroupPictureUpdatedByYou: 'You changed the group picture',
      notificationGroupPictureRemoved: '{{who}} removed the group picture',
      notificationGroupPictureRemovedByYou: 'You removed the group picture',
      notificationReportTitle: 'You have {{count}} new messages.',
      notificationReportBody: 'From {{count}} conversations.',
      inAppNotification: '{{title}}: {{body}}',
      wakeUpTime: 'Check for messages…',
      wakeUpDescription: 'Time period to check for new messages: shorter ' +
                         'times lead to higher battery consumption.',
      eachMinute: 'Each minute',
      each5Minutes: 'Each 5 minutes',
      each10Minutes: 'Each 10 minutes',
      each20Minutes: 'Each 20 minutes',
      each30Minutes: 'Each 30 minutes',
      eachHour: 'Each hour',
      disabled: 'Never',
      termsOfUse: 'Terms and conditions',
      fileTooLargeToBeSent: 'The file is too large. The limit for sending ' +
                            'files is 10MiB.',
      errorAddingParticipant: 'This contact can not be added to this group',
      genericConnectionProblem: 'There was an unexpected problem. Are you ' +
            'sure you are connected? Try to close and open OpenWapp. If the ' +
            'behaviour keep reproducing, try again later.',
      participatingInTooMuchGroups: 'You are participating in too much groups' +
      '. The limit is 50. You must leave one group before starting another ' +
      'one.',
      accountExpired: 'Your account has expired. Do you want to upgrade ' +
                         'your account now?',
      accountExpiration: 'Expiration date',
      upgradeNow: 'Upgrade now',
      notSquarePicture: 'The selected image is not square. This will make to ' +
      'appear padding bands around. If you want to fix it, go to the ' +
      'Gallery, and edit and crop the photo, using a 1:1 aspect ratio.'
    },
    pt : {
      all: 'Tudo',
      contacts: 'Contatos',
      noContacts: 'Não tem contatos',
      jan: 'Jan',
      feb: 'Fev',
      mar: 'Mar',
      apr: 'Abr',
      may: 'Mai',
      jun: 'Jun',
      jul: 'Jul',
      aug: 'Ago',
      sep: 'Set',
      oct: 'Out',
      nov: 'Nov',
      dic: 'Dez',
      offline: 'offline',
      online: 'online',
      connecting: 'conectando',
      oldAppAlert: 'Esta versão não está suportada. Favor atualizar ' +
      'no Firefox Marketplace para aproveitar a nova funcionalidade.',
      selectCountryAlert: 'Por favor, selecione um país.',
      movilNumberValidationAlert: 'O número de celular:\n' +
      '+{{prefix}} {{number}}\nnão parece um número válido de {{country}}.\n ' +
      'De qualquer forma, você quer continuar?',
      registerErrorObjectAlert: 'Houve um erro ao cadastrar' +
      'seu número.\n Por favor, verifique sua conexão.',
      registerError429Alert: 'Houve um erro ao cadastrar ' +
      'seu número.\n Por favor, contate com o suporte.',
      registerErrorGenericAlert: 'Houve um erro ao cadastrar ' +
      'seu número.\n Por favor, tente novamente mais tarde.',
      registerErrorTooRecent: 'É muito cedo para solicitar outro código de ' +
      'registo. Verifique se você não tiver recebido a mensagem de ' +
      'confirmação. Se assim for, espere um pouco ou tentar registrar em ' +
      '{{minutes}} minutos.',
      pinInvalidAlert: 'PIN não válido.',
      screenNameAlert: 'Seu nome de usuário não pode estar vazio.',
      inbox: 'Caixa de entrada',
      noConversation: 'Não há conversas.',
      selectContacts: 'Escolha contatos da lista de contatos de OpenWapp ' +
      'para começar uma conversa.',
      removeGroupConversation: 'Você quer deixar o grupo {{groupTitle}} e ' +
      'retire a conversa?',
      remove1to1Conversation: 'Você quer remover a conversa com {{who}}?',
      removeMessage: 'Você quer remover esta mensagem?',
      today: 'Hoje',
      yesterday: 'Ontem',
      before: 'Anterior',
      settings: 'Mais',
      profile: 'Perfil',
      profileExplanation: 'Aqui você pode definir o nome do contato, status ' +
      'e imagem de contato:',
      openWapp: 'OpenWapp',
      loading: 'Carregando…',
      loadingConversations: 'Carregando conversas…',
      registerOpenWapp: 'Cadastro no OpenWapp',
      welcomeMessage1: 'Bem vindo ao OpenWapp.',
      welcomeMessage2: 'Se cadastrar é muito fácil e rápido.',
      insertMobileNumber: 'Por favor, insira seu número de celular',
      countryDetectedOnLogin: 'Você tem um {{país}} número de telefone. ' +
      'Mude-se não é correto',
      countryNotDetectedOnLogin: 'Por favor, selecione seu país abaixo',
      country: 'País',
      yourNumberPlaceHolder: 'Seu número',
      nextButton: 'Seguinte',
      backButton: 'Atrás',
      reEnterPhone: 'Registar-se um outro telefone',
      goToValidateButton: 'Eu já tenho o código!',
      smsValMessage: 'Obrigado, aagora vamos tentar validar o seu número:',
      codePlaceholder: 'Código',
      sendingValCode: 'Verificando número…',
      loginEditIncorrect: 'Aperte para editar se seu número não for correto.',
      loginNumberOk: 'Aperte Aceitar se o número é correto.',
      acceptButton: 'Aceitar',
      name: 'Nome',
      settingsGeneral: 'Geral',
      settingsAbout: 'Sobre',
      settingsVersion: 'Versão',
      logout: 'Sair',
      validateCode: 'Por favor, inserir o código que foi recebido por ' +
      'SMS a ',
      validateCodeProgress: 'Verificando código…',
      validateCodeCall: 'Ligar com o código',
      settingAccount: 'Configurando a conta…',
      pictureDescription: 'Escolha a foto para mostrar como a foto do contato',
      screenNamePlaceHolder: 'Seu nome',
      screenNameDescription: 'Isto aparecerá como seu nome de usuário',
      statusPlaceHolder: 'Estou…',
      statusDescription: 'Isto aparecerá como seu status de usuário',
      doneButton: 'Feito',
      pending: 'pendente',
      sent: 'enviado',
      unsent: 'não enviado',
      defaultImageCaption: 'Sem legenda',
      received: 'recebido',
      composeImageCaptionPlaceholder: 'Adicionar uma legenda',
      sendButton: 'Enviar',
      loadImageError: 'Não é possível obter a imagen.' +
      '\n Tentar novamente mais tarde.',
      sendingImage: 'Enviando',
      audioMessageSent: 'Audio enviado',
      audioMessageReceived: 'Audio recebido',
      loadAudioError: 'Não é possível obter a arquivo.' +
      '\n Tentar novamente mais tarde.',
      sendLocation: 'Enviar localização',
      loadLocationError: 'Lamentamos, não é possível obter a sua ' +
      'localização.\n Por favor, tentar novamente mais tarde.',
      retrievingLocation: 'Carregando localização…',
      cancelButton: 'Cancelar',
      currentLocation: 'Localização actual',
      logoutAlertText: 'Utilizar esta opção apenas se pretende eliminar ' +
      'OpenWapp deste dispositivo para iniciar sessão OpenWapp num ' +
      'dispositivo diferente. Para entrar em modo offline, basta desligar ' +
      'OpenWapp e este entrará automaticamente em modo de repouso.',
      savePicture: 'Salvar',
      sdCardUnavailable: 'Nenhum cartão de memória disponível',
      pictureSavePrompt: 'Deseja salvar esta foto na galeria?',
      pictureSaveInfo: 'Guardada',
      pictureSaveError: 'Ocorreu um erro ao salvar a foto. Por favor, tente ' +
      'novamente mais tarde.',
      migrationHeader: 'Atualização do OpenWapp',
      migrationBody: 'OpenWapp está finalizando a atualização da nova versão.',
      migrationPleaseWait: 'Aguarde por favor',
      conversationLastSeen: 'Visto pela última vez:',
      conversationIsOnline: 'Disponível',
      loadingParticipants: 'Carregando contatos…',
      invite: 'Convidar para WhatsApp',
      tellAFriendText: 'Check out WhatsApp Messenger for Android, iPhone, ' +
      'Nokia, BlackBerry, Windows Phone and now Firefox OS! Download it ' +
      'today from http://whatsapp.com/dl/',
      emojiListTitle: 'Escolher um emoji para enviar',
      contactProfile: 'Perfil de contato',
      newGroup: 'Novo grupo',
      groupProfile: 'Info do grupo',
      leaveGroup: 'Sair do grupo',
      groupPictureDescription: 'Escolher e imagem para o grupo',
      subjectPlaceHolder: 'Este grupo é sobre…',
      subjectDescription: 'Descrevem o que é o objecto do presente grupo',
      participants: 'Participantes',
      unknownParticipant: 'Participante desconhecido',
      participantsDescription: 'Escolher os participantes de seu grupo',
      addParticipant: 'Adicionar participante',
      removeParticipant: 'Remover participante',
      image: 'Imagem',
      video: 'Vídeo',
      audio: 'Áudio',
      notificationSubjectChanged: '{{who}} mudou o objecto do grupo a:\n' +
                                  '{{subject}}',
      notificationSubjectChangedByYou: 'Você mudou o objecto do grupo a:\n' +
                                       '{{subject}}',
      notificationGroupParticipantAdded: '{{who}} se juntou ao grupo',
      notificationGroupParticipantRemoved: '{{who}} deixou o grupo',
      notificationGroupPictureUpdated: '{{who}} mudou a foto de grupo',
      notificationGroupPictureUpdatedByYou: 'Você mudou a foto de grupo',
      notificationGroupPictureRemoved: '{{who}} removido a foto de grupo',
      notificationGroupPictureRemovedByYou: 'Você removido a foto de grupo',
      notificationReportTitle: 'Você tem {{count}} mensagens não lidas.',
      notificationReportBody: 'A partir de {{count}} conversas.',
      inAppNotification: '{{title}}: {{body}}',
      wakeUpTime: 'Verificar as mensagens recebidas…',
      wakeUpDescription: 'Menor tempo de levar a um maior consumo de bateria',
      eachMinute: 'Cada minuto',
      each5Minutes: 'Cada 5 minutos',
      each10Minutes: 'Cada 10 minutos',
      each20Minutes: 'Cada 20 minutos',
      each30Minutes: 'Cada 30 minutos',
      eachHour: 'Cada hora',
      disabled: 'Nunca',
      termsOfUse: 'Termos e condições',
      fileTooLargeToBeSent: 'O arquivo é muito grande. O limite para o envio ' +
                            'de arquivos é 10MiB.',
      errorAddingParticipant: 'Este contacto não pode ser acrescentado ' +
            'a este grupo',
      genericConnectionProblem: 'Houve um problema inesperado. Tem certeza ' +
            'que você está conectado? Tente fechar e abrir OpenWapp. Se o ' +
            'comportamento continuar reproduzindo, tente novamente mais tarde.',
      participatingInTooMuchGroups: 'Está muito adicionado em grupos. O ' +
      'limite é de 50. Você deve deixar um grupo antes de iniciar outra.',
      accountExpired: 'Sua conta expirou. Você quer atualizar a sua conta ' +
                         'agora?',
      accountExpiration: 'Data de validade',
      upgradeNow: 'Actualizar agora',
      notSquarePicture: 'A imagem selecionada não é quadrado. Isso fará com ' +
      'que apareçam faixas ao redor. Se você quiser corrigi-lo, ' +
      'vá até a Galeria e editar e cortar a foto, usando uma relação de ' +
      'aspecto de 1:1.'
    },
    'pt-BR' : {
      all: 'Tudo',
      contacts: 'Contatos',
      noContacts: 'Não tem contatos',
      jan: 'Jan',
      feb: 'Fev',
      mar: 'Mar',
      apr: 'Abr',
      may: 'Mai',
      jun: 'Jun',
      jul: 'Jul',
      aug: 'Ago',
      sep: 'Set',
      oct: 'Out',
      nov: 'Nov',
      dic: 'Dez',
      offline: 'offline',
      online: 'online',
      connecting: 'conectando',
      oldAppAlert: 'Esta versão não está suportada. Favor atualizar ' +
      'no Firefox Marketplace para aproveitar a nova funcionalidade.',
      selectCountryAlert: 'Por favor, selecione um país.',
      movilNumberValidationAlert: 'O número de celular:\n' +
      '+{{prefix}} {{number}}\nnão parece um número válido de {{country}}.\n ' +
      'De qualquer forma, você quer continuar?',
      registerErrorObjectAlert: 'Houve um erro ao cadastrar' +
      'seu número.\n Por favor, verifique sua conexão.',
      registerError429Alert: 'Houve um erro ao cadastrar ' +
      'seu número.\n Por favor, contate com o suporte.',
      registerErrorGenericAlert: 'Houve um erro ao cadastrar ' +
      'seu número.\n Por favor, tente novamente mais tarde.',
      registerErrorTooRecent: 'É muito cedo para solicitar outro código de ' +
      'registo. Verifique se você não tiver recebido a mensagem de ' +
      'confirmação. Se assim for, espere um pouco ou tentar registrar em ' +
      '{{minutes}} minutos.',
      pinInvalidAlert: 'PIN não válido.',
      screenNameAlert: 'Seu nome de usuário não pode estar vazio.',
      inbox: 'Caixa de entrada',
      noConversation: 'Não há conversas.',
      selectContacts: 'Escolha contatos da lista de contatos de OpenWapp ' +
      'para começar uma conversa.',
      removeGroupConversation: 'Você quer deixar o grupo {{groupTitle}} e ' +
      'retire a conversa?',
      remove1to1Conversation: 'Você quer remover a conversa com {{who}}?',
      removeMessage: 'Você quer remover esta mensagem?',
      today: 'Hoje',
      yesterday: 'Ontem',
      before: 'Anterior',
      settings: 'Mais',
      profile: 'Perfil',
      profileExplanation: 'Aqui você pode definir o nome do contato, status ' +
      'e imagem de contato:',
      openWapp: 'OpenWapp',
      loading: 'Carregando…',
      loadingConversations: 'Carregando conversas…',
      registerOpenWapp: 'Cadastro no OpenWapp',
      welcomeMessage1: 'Bem vindo ao OpenWapp.',
      welcomeMessage2: 'Se cadastrar é muito fácil e rápido.',
      insertMobileNumber: 'Por favor, insira seu número de celular',
      countryDetectedOnLogin: 'Você tem um {{país}} número de telefone. ' +
      'Mude-se não é correto',
      countryNotDetectedOnLogin: 'Por favor, selecione seu país abaixo',
      country: 'País',
      yourNumberPlaceHolder: 'Seu número',
      nextButton: 'Seguinte',
      backButton: 'Atrás',
      reEnterPhone: 'Registar-se um outro telefone',
      goToValidateButton: 'Eu já tenho o código!',
      smsValMessage: 'Obrigado, aagora vamos tentar validar o seu número:',
      codePlaceholder: 'Código',
      sendingValCode: 'Verificando número…',
      loginEditIncorrect: 'Aperte para editar se seu número não for correto.',
      loginNumberOk: 'Aperte Aceitar se o número é correto.',
      acceptButton: 'Aceitar',
      name: 'Nome',
      settingsGeneral: 'Geral',
      settingsAbout: 'Sobre',
      settingsVersion: 'Versão',
      logout: 'Sair',
      validateCode: 'Por favor, inserir o código que foi recebido por ' +
      'SMS a ',
      validateCodeProgress: 'Verificando código…',
      validateCodeCall: 'Ligar com o código',
      settingAccount: 'Configurando a conta…',
      pictureDescription: 'Escolha a foto para mostrar como a foto do contato',
      screenNamePlaceHolder: 'Seu nome',
      screenNameDescription: 'Isto aparecerá como seu nome de usuário',
      statusPlaceHolder: 'Estou…',
      statusDescription: 'Isto aparecerá como seu status de usuário',
      doneButton: 'Feito',
      pending: 'pendente',
      sent: 'enviado',
      unsent: 'não enviado',
      defaultImageCaption: 'Sem legenda',
      received: 'recebido',
      composeImageCaptionPlaceholder: 'Adicionar uma legenda',
      sendButton: 'Enviar',
      loadImageError: 'Não é possível obter a imagen.' +
      '\n Tentar novamente mais tarde.',
      sendingImage: 'Enviando',
      audioMessageSent: 'Audio enviado',
      audioMessageReceived: 'Audio recebido',
      loadAudioError: 'Não é possível obter a arquivo.' +
      '\n Tentar novamente mais tarde.',
      sendLocation: 'Enviar localização',
      loadLocationError: 'Lamentamos, não é possível obter a sua ' +
      'localização.\n Por favor, tentar novamente mais tarde.',
      retrievingLocation: 'Carregando localização…',
      cancelButton: 'Cancelar',
      currentLocation: 'Localização actual',
      logoutAlertText: 'Utilizar esta opção apenas se pretende eliminar ' +
      'OpenWapp deste dispositivo para iniciar sessão OpenWapp num ' +
      'dispositivo diferente. Para entrar em modo offline, basta desligar ' +
      'OpenWapp e este entrará automaticamente em modo de repouso.',
      savePicture: 'Salvar',
      sdCardUnavailable: 'Nenhum cartão de memória disponível',
      pictureSavePrompt: 'Deseja salvar esta foto na galeria?',
      pictureSaveInfo: 'Guardada',
      pictureSaveError: 'Ocorreu um erro ao salvar a foto. Por favor, tente ' +
      'novamente mais tarde.',
      migrationHeader: 'Atualização do OpenWapp',
      migrationBody: 'OpenWapp está finalizando a atualização da nova versão.',
      migrationPleaseWait: 'Aguarde por favor',
      conversationLastSeen: 'Visto pela última vez:',
      conversationIsOnline: 'Disponível',
      loadingParticipants: 'Carregando contatos…',
      invite: 'Convidar para WhatsApp',
      tellAFriendText: 'Check out WhatsApp Messenger for Android, iPhone, ' +
      'Nokia, BlackBerry, Windows Phone and now Firefox OS! Download it ' +
      'today from http://whatsapp.com/dl/',
      emojiListTitle: 'Escolher um emoji para enviar',
      contactProfile: 'Perfil de contato',
      newGroup: 'Novo grupo',
      groupProfile: 'Info do grupo',
      leaveGroup: 'Sair do grupo',
      groupPictureDescription: 'Escolher e imagem para o grupo',
      subjectPlaceHolder: 'Este grupo é sobre…',
      subjectDescription: 'Descrevem o que é o objecto do presente grupo',
      participants: 'Participantes',
      unknownParticipant: 'Participante desconhecido',
      participantsDescription: 'Escolher os participantes de seu grupo',
      addParticipant: 'Adicionar participante',
      removeParticipant: 'Remover participante',
      image: 'Imagem',
      video: 'Vídeo',
      audio: 'Áudio',
      you: 'Tú',
      notificationSubjectChanged: '{{who}} mudou o objecto do grupo a:\n' +
                                  '{{subject}}',
      notificationSubjectChangedByYou: 'Você mudou o objecto do grupo a:\n' +
                                       '{{subject}}',
      notificationGroupParticipantAdded: '{{who}} se juntou ao grupo',
      notificationGroupParticipantRemoved: '{{who}} deixou o grupo',
      notificationGroupPictureUpdated: '{{who}} mudou a foto de grupo',
      notificationGroupPictureUpdatedByYou: 'Você mudou a foto de grupo',
      notificationGroupPictureRemoved: '{{who}} removido a foto de grupo',
      notificationGroupPictureRemovedByYou: 'Você removido a foto de grupo',
      notificationReportTitle: 'Você tem {{count}} mensagens não lidas.',
      notificationReportBody: 'A partir de {{count}} conversas.',
      inAppNotification: '{{title}}: {{body}}',
      wakeUpTime: 'Verificar as mensagens recebidas…',
      wakeUpDescription: 'Menor tempo de levar a um maior consumo de bateria',
      eachMinute: 'Cada minuto',
      each5Minutes: 'Cada 5 minutos',
      each10Minutes: 'Cada 10 minutos',
      each20Minutes: 'Cada 20 minutos',
      each30Minutes: 'Cada 30 minutos',
      eachHour: 'Cada hora',
      disabled: 'Nunca',
      termsOfUse: 'Termos e condições',
      fileTooLargeToBeSent: 'O arquivo é muito grande. O limite para o envio ' +
                            'de arquivos é 10MiB.',
      errorAddingParticipant: 'Este contacto não pode ser acrescentado ' +
            'a este grupo',
      genericConnectionProblem: 'Houve um problema inesperado. Tem certeza ' +
            'que você está conectado? Tente fechar e abrir OpenWapp. Se o ' +
            'comportamento continuar reproduzindo, tente novamente mais tarde.',
      participatingInTooMuchGroups: 'Está muito adicionado em grupos. O ' +
      'limite é de 50. Você deve deixar um grupo antes de iniciar outra.',
      accountExpired: 'Sua conta expirou. Você quer atualizar a sua conta ' +
                         'agora?',
      accountExpiration: 'Data de validade',
      upgradeNow: 'Actualizar agora',
      notSquarePicture: 'A imagem selecionada não é quadrado. Isso fará com ' +
      'que apareçam faixas ao redor. Se você quiser corrigi-lo, ' +
      'vá até a Galeria e editar e cortar a foto, usando uma relação de ' +
      'aspecto de 1:1.'
    }
  };
});