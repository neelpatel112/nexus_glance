// ─── SUPABASE CONFIG ────────────────────────────────────────────
// 🔴 REPLACE THESE WITH YOUR OWN VALUES FROM supabase.com
const SUPABASE_URL = 'https://afobsohmvmrxvqvcjdkf.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_1de2PhbBQ6wDV3djDI1Mew_QXWtugzr';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ─── SIGN UP ────────────────────────────────────────────────────
async function handleSignup() {
  const username = document.getElementById('signupUsername')?.value?.trim();
  const email    = document.getElementById('signupEmail')?.value?.trim();
  const password = document.getElementById('signupPassword')?.value;
  const errEl    = document.getElementById('signupError');

  if (!username || !email || !password) {
    errEl.textContent = 'Please fill in all fields.'; return;
  }
  if (password.length < 6) {
    errEl.textContent = 'Password must be at least 6 characters.'; return;
  }
  errEl.textContent = '';

  const btn = document.querySelector('#signupForm .btn-primary');
  btn.textContent = 'Creating account…';
  btn.disabled = true;

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: { data: { username } }
  });

  if (error) {
    errEl.textContent = error.message;
    btn.textContent = 'Sign Up';
    btn.disabled = false;
    return;
  }

  // Create profile row in DB
  if (data.user) {
    await supabaseClient.from('profiles').insert({
      id: data.user.id,
      username,
      email,
      followers_count: 0,
      following_count: 0,
    });
  }

  btn.textContent = 'Sign Up';
  btn.disabled = false;

  // If email confirmation is OFF (recommended for dev), go straight to home
  if (data.session) {
    window.location.href = 'home.html';
  } else {
    errEl.style.color = '#27ae60';
    errEl.textContent = 'Check your email to confirm your account!';
  }
}

// ─── LOG IN ─────────────────────────────────────────────────────
async function handleLogin() {
  const email    = document.getElementById('loginEmail')?.value?.trim();
  const password = document.getElementById('loginPassword')?.value;
  const errEl    = document.getElementById('loginError');

  if (!email || !password) {
    errEl.textContent = 'Please enter your email and password.'; return;
  }
  errEl.textContent = '';

  const btn = document.querySelector('#loginForm .btn-primary');
  btn.textContent = 'Logging in…';
  btn.disabled = true;

  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

  if (error) {
    errEl.textContent = 'Wrong email or password.';
    btn.textContent = 'Log In';
    btn.disabled = false;
    return;
  }

  window.location.href = 'home.html';
}

// ─── LOG OUT ─────────────────────────────────────────────────────
async function handleLogout() {
  await supabaseClient.auth.signOut();
  window.location.href = 'index.html';
}

// ─── AUTH STATE LISTENER ─────────────────────────────────────────
// Redirect logged-in users away from auth page
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
  supabaseClient.auth.getSession().then(({ data: { session } }) => {
    if (session) window.location.href = 'home.html';
  });
}
 